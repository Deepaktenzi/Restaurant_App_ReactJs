import { useEffect } from 'react';
const ProfileFunc = () => {
  useEffect(() => {
    const time = setInterval(() => {
      console.log('UseEffect Mount');
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <h1>THis Is Profile Function</h1>
    </>
  );
};
export default ProfileFunc;
