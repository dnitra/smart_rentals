<?php

namespace App\Services;

use App\Models\Image;
// use App\Models\RentedProperty;

class ImageService
{


  function storeImage($uploaded_image, $propertyId)
  {

    // set random filename with original extension
    $filename = time() . rand(0, 3) . '.' . ($uploaded_image->getClientOriginalExtension());

    // save image to laravel disk
    $uploaded_image->storeAs('uploaded_files', $filename, 'uploads');

    // image title is original name of the image
    $imageTitle = $uploaded_image->getClientOriginalName();


    // create new image instance
    $image = new Image;

    // fill image object with data
    // add rented property id to image
    $image->rented_property_id = $propertyId;
    $image->title = $imageTitle;
    $image->image_url = 'uploads/uploaded_files/' . $filename;
    // save image to the database
    $image->save();
  }
}
