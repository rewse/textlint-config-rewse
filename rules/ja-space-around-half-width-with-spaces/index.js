/**
 * @fileoverview Rule to check spacing between full-width and half-width strings
 * - No space between full-width and half-width strings without spaces
 * - Space required between full-width and half-width strings with spaces
 */

const { RuleHelper } = require('textlint-rule-helper');

/**
 * Check if a string contains spaces
 * @param {string} str - String to check
 * @returns {boolean} True if string contains spaces
 */
function containsSpaces(str) {
  return /\s/.test(str);
}

/**
 * Check if a character is full-width
 * @param {string} char - Character to check
 * @returns {boolean} True if character is full-width
 */
function isFullWidth(char) {
  const code = char.charCodeAt(0);
  // Full-width characters (Hiragana, Katakana, Kanji, full-width symbols)
  return (
    (code >= 0x3000 && code <= 0x303f) || // CJK Symbols and Punctuation
    (code >= 0x3040 && code <= 0x309f) || // Hiragana
    (code >= 0x30a0 && code <= 0x30ff) || // Katakana
    (code >= 0x4e00 && code <= 0x9fff) || // CJK Unified Ideographs
    (code >= 0xff00 && code <= 0xffef)    // Full-width forms
  );
}

/**
 * Check if a character is half-width (excluding spaces)
 * @param {string} char - Character to check
 * @returns {boolean} True if character is half-width
 */
function isHalfWidth(char) {
  return !isFullWidth(char) && char !== ' ' && char !== '\t' && char !== '\n';
}

/**
 * Extract half-width sequences from text
 * @param {string} text - Text to analyze
 * @param {number} startIndex - Start index in the original text
 * @returns {Array} Array of half-width sequences with their positions
 */
function extractHalfWidthSequences(text, startIndex) {
  const sequences = [];
  let currentSeq = '';
  let seqStart = -1;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (isHalfWidth(char) || char === ' ' || char === '\t') {
      if (currentSeq === '') {
        seqStart = i;
      }
      currentSeq += char;
    } else {
      if (currentSeq !== '') {
        sequences.push({
          text: currentSeq.trim(),
          start: startIndex + seqStart,
          end: startIndex + i
        });
        currentSeq = '';
      }
    }
  }

  if (currentSeq !== '') {
    sequences.push({
      text: currentSeq.trim(),
      start: startIndex + seqStart,
      end: startIndex + text.length
    });
  }

  return sequences;
}

function reporter(context) {
  const { Syntax, RuleError, report, getSource } = context;
  const helper = new RuleHelper(context);

  return {
    [Syntax.Str](node) {
      // Skip if node should be ignored
      if (helper.isChildNode(node, [Syntax.Link, Syntax.Image, Syntax.BlockQuote, Syntax.Code, Syntax.Header])) {
        return;
      }

      const text = getSource(node);
      const sequences = extractHalfWidthSequences(text, node.range[0]);

      sequences.forEach(seq => {
        // Skip empty sequences
        if (!seq.text) {
          return;
        }

        const hasSpaces = containsSpaces(seq.text);
        const seqStartInText = seq.start - node.range[0];
        const seqEndInText = seq.end - node.range[0];
        
        // Check before the sequence
        const beforeIndex = seqStartInText - 1;
        if (beforeIndex >= 0) {
          const beforeChar = text[beforeIndex];
          
          if (isFullWidth(beforeChar)) {
            // Check if there's a space between full-width char and half-width sequence
            const hasSpaceBefore = (beforeIndex + 1 < text.length && text[beforeIndex + 1] === ' ');
            
            if (hasSpaces && !hasSpaceBefore) {
              // Should have space but doesn't
              report(node, new RuleError(
                `全角文字とスペースを含む半角文字列の間にはスペースを入れる必要があります: "${beforeChar}${seq.text.substring(0, 10)}..."`,
                { index: beforeIndex + 1 }
              ));
            } else if (!hasSpaces && hasSpaceBefore) {
              // Should not have space but does
              report(node, new RuleError(
                `全角文字とスペースを含まない半角文字列の間にはスペースを入れないでください: "${beforeChar} ${seq.text}"`,
                { index: beforeIndex + 1 }
              ));
            }
          }
        }

        // Check after the sequence
        const afterIndex = seqEndInText;
        if (afterIndex < text.length) {
          const afterChar = text[afterIndex];
          
          if (isFullWidth(afterChar)) {
            // Check if there's a space between half-width sequence and full-width char
            const hasSpaceAfter = (afterIndex > 0 && text[afterIndex - 1] === ' ');
            
            if (hasSpaces && !hasSpaceAfter) {
              // Should have space but doesn't
              report(node, new RuleError(
                `全角文字とスペースを含む半角文字列の間にはスペースを入れる必要があります: "...${seq.text.substring(seq.text.length - 10)}${afterChar}"`,
                { index: afterIndex }
              ));
            } else if (!hasSpaces && hasSpaceAfter) {
              // Should not have space but does
              report(node, new RuleError(
                `全角文字とスペースを含まない半角文字列の間にはスペースを入れないでください: "${seq.text} ${afterChar}"`,
                { index: afterIndex - 1 }
              ));
            }
          }
        }
      });
    }
  };
}

module.exports = reporter;
