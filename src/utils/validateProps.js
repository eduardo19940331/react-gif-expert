export function validateProps(props, rules) {

//   if (process.env.NODE_ENV !== 'development') return;

  for (const key in rules) {
    const validator = rules[key];
    const value = props[key];
    
    const valid = typeof validator === 'function' ? validator(value) : true;

    if (!valid) {
      const type = typeof value;
      console.error(
        `[PropValidation] Prop "${key}" is invalid.\n` +
        `  → Received: ${JSON.stringify(value)} (${type})`
      );
    }
  }
}