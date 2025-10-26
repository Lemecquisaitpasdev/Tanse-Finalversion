const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  console.log('🚀 Starting image optimization...\n');

  // Testimonials - Optimize to 400x400 WebP
  const trustDir = 'public/trust';
  const trustFiles = fs.readdirSync(trustDir);

  let testimonialCount = 0;
  let testimonialSizeBefore = 0;
  let testimonialSizeAfter = 0;

  for (const file of trustFiles) {
    if (/\.(jpe?g|png)$/i.test(file)) {
      const inputPath = path.join(trustDir, file);
      const outputPath = path.join(trustDir, file.replace(/\.(jpe?g|png)$/i, '.webp'));

      const statsBefore = fs.statSync(inputPath);
      testimonialSizeBefore += statsBefore.size;

      await sharp(inputPath)
        .resize(400, 400, { fit: 'cover', position: 'center' })
        .webp({ quality: 85 })
        .toFile(outputPath);

      const statsAfter = fs.statSync(outputPath);
      testimonialSizeAfter += statsAfter.size;

      const savedKB = ((statsBefore.size - statsAfter.size) / 1024).toFixed(0);
      console.log(`✅ ${file} → ${path.basename(outputPath)} (saved ${savedKB}KB)`);
      testimonialCount++;
    }
  }

  // Entreprise - Optimize to 1920x1080 WebP
  const entrepriseInput = 'public/entreprise/stronger-together.jpg';
  const entrepriseOutput = 'public/entreprise/stronger-together.webp';

  const entrepriseStatsBefore = fs.statSync(entrepriseInput);

  await sharp(entrepriseInput)
    .resize(1920, 1080, { fit: 'cover', position: 'center' })
    .webp({ quality: 85 })
    .toFile(entrepriseOutput);

  const entrepriseStatsAfter = fs.statSync(entrepriseOutput);
  const entrepriseSavedKB = ((entrepriseStatsBefore.size - entrepriseStatsAfter.size) / 1024).toFixed(0);

  console.log(`✅ stronger-together.jpg → stronger-together.webp (saved ${entrepriseSavedKB}KB)`);

  // Summary
  const totalSizeBefore = testimonialSizeBefore + entrepriseStatsBefore.size;
  const totalSizeAfter = testimonialSizeAfter + entrepriseStatsAfter.size;
  const totalSaved = totalSizeBefore - totalSizeAfter;

  console.log('\n📊 Optimization Summary:');
  console.log(`   Testimonials: ${testimonialCount} images optimized`);
  console.log(`   Before: ${(totalSizeBefore / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   After: ${(totalSizeAfter / 1024 / 1024).toFixed(2)}MB`);
  console.log(`   Saved: ${(totalSaved / 1024 / 1024).toFixed(2)}MB (${((totalSaved / totalSizeBefore) * 100).toFixed(1)}%)`);
  console.log('\n🎉 All images optimized successfully!');
  console.log('\n⚠️  Next steps:');
  console.log('   1. Update TestimonialsMarquee.tsx to use .webp extensions');
  console.log('   2. Update entreprise/page.tsx to use stronger-together.webp');
  console.log('   3. Test the site to ensure images load correctly');
}

optimizeImages().catch(err => {
  console.error('❌ Error optimizing images:', err);
  process.exit(1);
});
