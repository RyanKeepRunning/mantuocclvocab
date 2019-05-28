import businessVocab from './businessVocab';
import centrelinkVocab from './/centrelinkVocab';
import educationVocab from './educationVocab';
import immigrationVocab from './immigrationVocab';
import lawVocab from './lawVocab';
import medicalVocab from './medicalVocab';
let content = [];

content = content.concat(businessVocab.content)
                  .concat(centrelinkVocab.content)
                  .concat(educationVocab.content)
                  .concat(immigrationVocab.content)
                  .concat(lawVocab.content)
                  .concat(medicalVocab.content);
const allVocab = {name:'all',content};
export default allVocab;