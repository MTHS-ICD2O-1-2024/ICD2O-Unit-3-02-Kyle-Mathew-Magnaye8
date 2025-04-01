// Copyright (c) 2025 kyle.matthew.magnaye All rights reserved
//
// Created by: kyle.matthew.magnaye
// Created on: Mar 2025
// This file contains the JS functions for index.html

function calculateVolume() {
  const LENGTH_OF_PYRAMID = parseFloat(document.getElementById("length-of-pyramid").value)
  const WIDTH_OF_PYRAMID = parseFloat(document.getElementById("width-of-pyramid").value)
  const HEIGHT_OF_PYRAMID = parseFloat(document.getElementById("height-of-pyramid").value)

  // Correct volume calculation
  const volume = (LENGTH_OF_PYRAMID * WIDTH_OF_PYRAMID * HEIGHT_OF_PYRAMID) / 3

  // Display result
  document.getElementById("user-info").innerText = "Volume is: " + calculateVolume.toFixed(2) + " mm³"
}