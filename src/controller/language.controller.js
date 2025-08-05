export const getlanguages = (req, res) => {
  res.status(200).json([
    {
      id: 1,
      lang: "HTML",
    },
    {
      id: 2,
      lang: "CSS",
    },
    {
      id: 3,
      lang: "JavaScript",
    },
  ]);
};
