import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const generateContacts = async (number) => {
   try {
      const contacts = [];
      for (let i = 0; i < number; i++) {
         contacts.push(createFakeContact());
      }

      const currentContacts = await readContacts();
      const newContacts = currentContacts.concat(contacts);
    
      console.log(`Added ${number} new contacts.`);
      return await writeContacts(newContacts);
   } catch (err) {
      console.log(err);
   }
};

generateContacts(5);
