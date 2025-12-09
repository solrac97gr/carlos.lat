const { getSanityPostBySlug, normalizeSanityPost } = require('./lib/sanity');

async function test() {
  try {
    const post = await getSanityPostBySlug('carlos-lat-v2', 'en');
    console.log('Raw post from Sanity:', {
      hasBody: !!post.body,
      bodyType: Array.isArray(post.body) ? 'array' : typeof post.body,
      bodyLength: post.body?.length
    });
    
    const normalized = normalizeSanityPost(post);
    console.log('\nNormalized post:');
    console.log('- isPortableText:', normalized.isPortableText);
    console.log('- portableTextContent exists:', !!normalized.portableTextContent);
    console.log('- portableTextContent type:', Array.isArray(normalized.portableTextContent) ? 'array' : typeof normalized.portableTextContent);
    console.log('- portableTextContent length:', normalized.portableTextContent?.length);
    console.log('- First block type:', normalized.portableTextContent?.[0]?._type);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

test();
