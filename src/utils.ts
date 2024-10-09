import { TemplateResult } from "lit-html";

export const render = (data: TemplateResult<1>): string => {
  const {strings, values} = data;
  const v = [...values, ''].map(e => typeof e === 'object' ? render(e as TemplateResult<1>) : e )      
  return strings.reduce((acc,s, i) => acc + s + v[i], '')
}
