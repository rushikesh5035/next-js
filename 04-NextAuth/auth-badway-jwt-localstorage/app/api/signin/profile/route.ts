import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function GET(req: NextRequest) {
  return NextResponse.json({
    avatarUrl:
      "https://www.google.com/search?sca_esv=f8ded6305c32e328&rlz=1C1RXQR_enIN1080IN1080&sxsrf=AHTn8zrlkKxACxzTOqU4Y-Qq9xCvD9mviQ:1741978448837&q=avatarUrl&udm=2&fbs=ABzOT_CWdhQLP1FcmU5B0fn3xuWpA-dk4wpBWOGsoR7DG5zJBjLjqIC1CYKD9D-DQAQS3Z6JH2y2b_9HECuNfyCC5Q4nYgSEoSPNyQxoYBAHFnh_nD0mj24ERlHhy1Z7Aigm44nOebEvlpSSbSdyd8ttN0RZ7QidXu0gJ7ZWGGW0fRYcaGcAuUfmg3Y4JP352905pE8KkdqXsy2tr1Om0PZV-4KsH1NNmA&sa=X&ved=2ahUKEwiTwpi1n4qMAxXByzgGHUhSG-MQtKgLegQIFxAB&biw=726&bih=695&dpr=1.25#vhid=S09dD9w9SdmCpM&vssid=mosaic",
  });
}
