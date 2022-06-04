const data: IReturn[] = [
  { name: 'Britanico', address: 'Calle falsa 123' },
  { name: 'Suizo', address: 'Sudestal ashei 123' },
  { name: 'Hospital de la armada', address: 'Subestacion general videla 123' },
];

interface IReturn {
  name: string;
  address: string;
}

const getClinics = async (): Promise<IReturn[]> => {
  const promise = new Promise<IReturn[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });

  const res = await promise;

  return res;
};

export default getClinics;
