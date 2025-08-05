export const getUsers = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      Name: "Vivek",
    },
    {
      id: 2,
      Name: "Viral",
    },
  ]);
};
