import { Classic } from 'panaiscard';
import fs from 'fs';

async function generateCard() {
    try {
        console.log('🔄 Generating music card...');

        const imageBuffer = await Classic({
            thumbnailImage: 'https://hiphopcorner.fr/wp-content/uploads/2016/05/image-eminem-cover-album-marshall-mathers-lp.jpg',
            backgroundImage: 'https://th.bing.com/th/id/OIP.S-hA3E8PpnPFhorPIND7BgHaD1?w=313&h=179&c=7&r=0&o=5&pid=1.7',
            imageDarkness: 60,
            nameColor: '#DC92FF',
            progressColor: '#DC92FF',
            progressBarColor: '#2B2B2B',
            progress: 15, 
        });

        fs.writeFileSync('output.png', imageBuffer);
        console.log('✅ Card generated successfully: output.png');

    } catch (error) {
        console.error('❌ Error generating music card:', error);
    }
}

generateCard();
