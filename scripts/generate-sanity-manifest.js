const { sanityClient } = require('../lib/sanity');
const fs = require('fs');
const path = require('path');

async function generateManifest() {
  try {
    console.log('📦 Fetching Sanity posts...');
    
    const query = `*[_type == "post" && status == "published"] {
      "slug": slug.current,
      language
    }`;
    
    const posts = await sanityClient.fetch(query);
    const slugs = posts.map(p => p.slug);
    
    const manifest = {
      slugs: Array.from(new Set(slugs)),
      generated: new Date().toISOString(),
      count: slugs.length
    };
    
    const manifestPath = path.join(__dirname, '..', '.sanity-manifest.json');
    fs.writeFileSync(
      manifestPath,
      JSON.stringify(manifest, null, 2)
    );
    
    console.log(`✅ Generated manifest with ${manifest.slugs.length} Sanity post slugs`);
    console.log(`   Posts: ${manifest.slugs.join(', ')}`);
  } catch (error) {
    console.error('⚠️  Failed to fetch Sanity posts:', error.message);
    console.log('📝 Creating empty manifest (MDX-only build)');
    
    // Create empty manifest so build doesn't fail
    const manifestPath = path.join(__dirname, '..', '.sanity-manifest.json');
    fs.writeFileSync(
      manifestPath,
      JSON.stringify({ 
        slugs: [], 
        generated: new Date().toISOString(),
        count: 0,
        error: error.message 
      }, null, 2)
    );
  }
}

generateManifest();
