# CodeSnippet Format Fix for Sanity

## Problem

Your Sanity post uses the WRONG format for CodeSnippet:

```mdx
<CodeSnippet lang="go">
\`\`\`go
// code here
\`\`\`
</CodeSnippet>
```

This causes MDX to try parsing the code content as JSX, which fails when it sees `<-` (Go's channel operator).

## Solution

Use the CORRECT format with `code={`...`}`:

```mdx
<CodeSnippet language="go" code={`
// code here
`}/>
```

## Key Changes

1. **Change `lang` to `language`**
2. **Remove the triple backticks (\`\`\`go and \`\`\`)**
3. **Wrap code in `code={`...`}`**
4. **Self-close the tag with `/>`**
5. **Remove the closing `</CodeSnippet>` tag**

## Example Conversions

### Before (WRONG):
```mdx
<CodeSnippet lang="go">
\`\`\`go
type hchan struct {
    qcount   uint
    dataqsiz uint
}
\`\`\`
</CodeSnippet>
```

### After (CORRECT):
```mdx
<CodeSnippet language="go" code={`
type hchan struct {
    qcount   uint
    dataqsiz uint
}
`}/>
```

### Before (WRONG - with channel operators):
```mdx
<CodeSnippet lang="go">
\`\`\`go
var ch3 <-chan int
var ch4 chan<- int
\`\`\`
</CodeSnippet>
```

### After (CORRECT):
```mdx
<CodeSnippet language="go" code={`
var ch3 <-chan int
var ch4 chan<- int
`}/>
```

## Quick Find & Replace in Sanity Studio

Since you have 14 CodeSnippets to fix, here's a systematic approach:

1. **Open your post in Sanity Studio**
2. **Find each** `<CodeSnippet lang="go">`
3. **For each one:**
   - Change `lang="go"` to `language="go" code={\``
   - Remove the line `\`\`\`go`
   - Find the closing `\`\`\``
   - Replace it with just \`}/>
   - Delete the `</CodeSnippet>` closing tag

## Verification

After fixing, your post should have:
- ✅ 0 occurrences of `\`\`\`go`
- ✅ 0 occurrences of `</CodeSnippet>`
- ✅ 14 occurrences of `code={\``
- ✅ 14 self-closing `/>` tags

## Why This Matters

MDX parses your content as JSX (JavaScript XML). When you write:
- `<-chan` - MDX thinks `<-` is an HTML tag
- Inside ` code={\`...\`}` - Content is treated as a JavaScript string, not parsed as JSX

This is why the correct format works but the old format fails.
