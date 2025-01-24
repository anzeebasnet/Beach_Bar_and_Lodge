// import fs from 'fs';
// import path from 'path';

// export default function handler(req, res) {
//   try {
//     const baseDir = path.join(process.cwd(), 'public/assets/images/hotel_view');

//     const getImagesFromDir = (subDir) => {
//       const dirPath = path.join(baseDir, subDir);
//       if (!fs.existsSync(dirPath)) return [];
//       const files = fs.readdirSync(dirPath);
//       return files
//         .filter((file) => /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(file))
//         .map((file) => `/assets/images/hotel_view/${subDir}/${file}`);
//     };

//     const categories = {
//       view: getImagesFromDir('View'),
//       dining: getImagesFromDir('Dining'),
//       food: getImagesFromDir('Food'),
//       rooms: getImagesFromDir('../rooms'),
//     };

//     res.status(200).json(categories);
//   } catch (error) {
//     console.error("Error fetching images:", error);
//     res.status(500).json({ error: "Failed to load images." });
//   }
// }
