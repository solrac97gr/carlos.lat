# Migrating from MDX to Portable Text in Sanity

Your Sanity Studio now uses **Portable Text** instead of raw MDX. This makes content editing much more robust and user-friendly.

## What Changed

### Before (Fragile)
- Body field was plain text with MDX syntax
- Easy to break with syntax errors (`<-`, `{`, etc.)
- No visual editor

### After (Robust)
- Body field is Portable Text with rich text editor
- Custom blocks for CodeSnippet and BlogLink
- Visual editing with toolbar
- Impossible to break syntax

## How to Use the New Editor

### Writing Content

1. **Text Formatting**: Use the toolbar for bold, italic, code
2. **Headings**: Select heading level from dropdown (H1-H4)
3. **Lists**: Click bullet or numbered list buttons
4. **Links**: Highlight text → click link icon → enter URL

### Adding Code Snippets

1. Click the **"+"** button in the editor
2. Select **"Code Snippet"**
3. Fill in:
   - **Language**: Select from dropdown (go, javascript, etc.)
   - **Code**: Paste your code
   - **Route** (optional): File path to show in header
   - **Output** (optional): Console output

### Adding Blog Links

1. Click the **"+"** button
2. Select **"Blog Link"**
3. Fill in:
   - **URL**: Link destination
   - **Content**: Link text

### Adding Images

1. Click the **"+"** button
2. Select **"Image"**
3. Upload or select image
4. Add alt text

## Migrating Existing Posts

Your existing Spanish post needs to be recreated in the new format:

### Option 1: Recreate in Studio (Recommended)

1. Open https://carloslat.sanity.studio/
2. Create new post with same slug
3. Use the rich text editor to format content
4. Add code snippets using the "+" button
5. Publish when done

### Option 2: Keep Old Posts in MDX

- Old posts in `data/` folder still work
- Only new Sanity posts use Portable Text
- You can mix both approaches

## Benefits

✅ **No more syntax errors** - Visual editor prevents breaking changes
✅ **Better mobile editing** - Rich text editor works great on phones
✅ **Structured content** - Code snippets are objects, not strings
✅ **Easier to maintain** - No need to escape special characters
✅ **Type safety** - Sanity validates your content structure

## Example: Before vs After

### Before (MDX in Sanity)
```
## Section Title

\`\`\`go
ch <- value  // This could break if you forget backticks
\`\`\`
```

### After (Portable Text)
- Heading 2: "Section Title" (dropdown)
- Click "+" → Code Snippet
  - Language: "go"
  - Code: "ch <- value" (no escaping needed!)

## Studio URL

Your studio is deployed at: **https://carloslat.sanity.studio/**

Access it from anywhere to create/edit posts! 🎉
