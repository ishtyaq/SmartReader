// Imports the Google Cloud client libraries
const vision = require('@google-cloud/vision');
const fs = require('fs');

// Creates a client
const client = new vision.ImageAnnotatorClient();

/**
 * TODO(developer): Uncomment the following line before running the sample.
 */
 const fileName = `D:/mywork/ml/SmartReader/resources/ashfaq-passport.png`;
const request = {
  image: {content: fs.readFileSync(fileName)},
};
async function quickstart() {
    const [result] = await client.objectLocalization(request);
    const objects = result.localizedObjectAnnotations;
    objects.forEach(object => {
      console.log(`Name: ${object.name}`);
      console.log(`Confidence: ${object.score}`);
      const vertices = object.boundingPoly.normalizedVertices;
      vertices.forEach(v => console.log(`x: ${v.x}, y:${v.y}`));
    });
}

quickstart().catch(console.error);
