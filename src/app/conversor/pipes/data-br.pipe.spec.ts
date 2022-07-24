import { DataBrPipe } from './data-br.pipe';

describe('DataBrPipe', () => {
  it('create an instance', () => {
    const pipe = new DataBrPipe();
    expect(pipe).toBeTruthy();
  });

  it('deve formatar a data 2022-07-24 para 24/07/2022', () => {
    const pipe = new DataBrPipe();
    expect(pipe.transform('2022-07-24')).toEqual('24/07/2022');
  });
});
