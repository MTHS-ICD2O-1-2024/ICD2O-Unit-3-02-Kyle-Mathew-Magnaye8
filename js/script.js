// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Mar 2025
// This file contains the JS functions for index.html

function calculateVolume() {
  // Get values as text first
  let lengthInput = document.getElementById("length-of-pyramid").value
  let widthInput = document.getElementById("width-of-pyramid").value
  let heightInput = document.getElementById("height-of-pyramid").value

  // Correct volume calculation
  const calculateVolume = (lengthInput * widthInput * heightInput) / 3

  // Display result
  document.getElementById("user-info").innerText =
    "Volume is: " + calculateVolume.toFixed(2) + " mm³"
}
