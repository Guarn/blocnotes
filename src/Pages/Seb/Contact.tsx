import { useEffect } from 'react';
import Input from '../../UI/Seb/Input/Input';
import { FormInputContain } from '../../UI/Seb/Input/Input.styled';

const Contact = () => {
  useEffect(() => {
    document.title = 'Contact';
  }, []);

  return (
    <FormInputContain>
      <Input
        fieldType="text"
        fieldName="prenom"
        fieldId="prenom"
        placeholder="Saisir le prénom"
        options={{ min: 3, specialChar: false, frenchChar: true, max: 250 }}
      />

      <Input
        fieldType="text"
        fieldName="nom"
        fieldId="nom"
        placeholder="Saisir le nom"
        options={{ min: 3, specialChar: false, frenchChar: true, max: 250 }}
      />
    </FormInputContain>
  );
};

export default Contact;
