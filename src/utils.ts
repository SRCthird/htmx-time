import { TemplateResult } from "lit-html";

/**
 * Renders a TemplateResult object to a string.
 * 
 * @param template - The TemplateResult object containing the template strings and values.
 * @returns The fully rendered string.
 */
export const render = (template: TemplateResult<1>): string => {
  const { strings, values } = template;
  
  const resolvedValues = [...values, ''].map(value => 
    typeof value === 'object' ? render(value as TemplateResult<1>) : value 
  );

  return strings.reduce((result, currentString, index) => 
    result + currentString + resolvedValues[index], 
    ''
  );
};
