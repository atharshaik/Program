// Given input data
const data = {
    '0': { questionId: '857b59b6-906f-4b39-ac4b-ac1a36758d86' },
    '1': { questionId: 'e39f341d-7ec8-403b-a131-f926ae9c5bec', name: 'shaik' },
    '2': { questionId: '2e21ad5a-16b6-4d77-ad2a-a46ff12a8b80' },
    '3': {
      questionId: 'd29725d9-007f-41de-a9bc-a3e84c49618f',
      age: 'Under 40'
    },
    '4': {
      questionId: 'a9931d4a-9783-46c8-930d-179dc25e3796',
      email: 'foobar@mailinator.com'
    },
  };
  
  // Initialize an empty object to store the result
  const output = {};
  
  // Loop through each key-value pair in the data object
  for (const key in data) {
    // Check if the current value has properties other than 'questionId'
    if (Object.keys(data[key]).length > 1) {
      // If yes, add those properties to the output object
      for (const prop in data[key]) {
        if (prop !== 'questionId') {
          output[prop] = prop === 'age' ? data[key][prop].toLowerCase() : data[key][prop];
        }
      }
    }
  }
  
  // Print the final output
  console.log(output);
  