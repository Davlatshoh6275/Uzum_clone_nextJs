import type { NextApiRequest, NextApiResponse } from "next";
// import prisma from "../../../prisma/prismaClient";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
  ) {
    
  
 const { id } = req.query;

 if (!id) return res.status(400).json({ error: "Missing id" });

 switch (req.method) {
  case "GET":
//    const book = await prisma.book.findUnique({
//     where: { id: id as string },
//    });
//    res.status(200).json({ data:  });
   break;

//   case "PATCH":
//    if (!req.body.book_nmae)
//     return res.status(400).json({ error: "Missing name" });

//    const updatedBook = await prisma.book.update({
//     where: { id: id as string },
//     data: req.body,
//    });
//    res.status(200).json({ data: updatedBook });
//    break;

//   case "DELETE":
//    const deletedBook = await prisma.book.delete({
//     where: { id: id as string },
//    });
//    res.status(200).json({ data: deletedBook });
//    break;

  default:
   res.status(405).end(`Method ${req.method} Not Allowed`);
   break;
 }
}