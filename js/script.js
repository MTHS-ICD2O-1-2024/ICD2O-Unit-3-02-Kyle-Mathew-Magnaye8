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

  // Convert to numbers
  const LENGTH_OF_PYRAMID = Number(lengthInput)
  const WIDTH_OF_PYRAMID = Number(widthInput)
  const HEIGHT_OF_PYRAMID = Number(heightInput)

  // Validate input
  if (
    isNaN(LENGTH_OF_PYRAMID) ||
    isNaN(WIDTH_OF_PYRAMID) ||
    isNaN(HEIGHT_OF_PYRAMID)
  ) {
    document.getElementById("user-info").innerText =
      "Please enter valid numbers for all fields."
    return
  }

  // Correct volume calculation
  const volume = (LENGTH_OF_PYRAMID * WIDTH_OF_PYRAMID * HEIGHT_OF_PYRAMID) / 3

  // Display result
  document.getElementById("user-info").innerText =
    "Volume is: " + volume.toFixed(2) + " mm³"
  componentHandler.upgradeDom() 
}
