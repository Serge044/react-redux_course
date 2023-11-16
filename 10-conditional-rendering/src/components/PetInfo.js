function PetInfo(props) {
  const { animal, age, hasPet } = props;

  console.log(props);
  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`}</h1>
  ) : (
    <h1>I don't have an animal</h1>
  );
}

export default PetInfo;
