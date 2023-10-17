import React from "react";
import { useParams } from "react-router-dom";

export default function ClientById() {
  const { id } = useParams();

  return( 
  <h1>{id} vaaaa</h1>
  );
}
