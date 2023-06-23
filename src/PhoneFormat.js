import React,{useState} from 'react'

const PhoneFormat = () => {
    const [phone, setPhone] = useState('');

  const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }

    return phone;
  };
  const handleChange = (event) => {
    const inputPhoneNumber = event.target.value;
    const formattedPhoneNumber = formatPhoneNumber(inputPhoneNumber);
    setPhone(formattedPhoneNumber);
  };
  return (
    <div>
    <input
    type="text"
    value={phone}
    onChange={handleChange}
  /></div>
  )
}

export default PhoneFormat