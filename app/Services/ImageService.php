<?php

namespace App\Services;

use App\Models\Image;
// use App\Models\RentedProperty;

class ImageService
{


  function storeImage($image, $propertyId, $title)
  {

    $filename = time() . rand(0, 3) . '.' . ($image->getClientOriginalExtension());
    $image->storeAs('uploaded_files', $filename, 'uploads');


    // create new image instance
    $image = new Image;

    // fill image object with data
    // add rented property id to image
    $image->rented_property_id = $propertyId;
    $image->title = $title;
    $image->image_url = 'uploads/uploaded_files/' . $filename;
    $image->save();
  }
}
