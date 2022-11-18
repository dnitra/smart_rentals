<?php

namespace App\Http\Controllers;

use App\Models\Image;
use App\Models\RentedProperty;
use App\Services\ImageService as ServicesImageService;
use Illuminate\Http\Request;
use Facades\App\Services\ImageService;

class ImageController extends Controller
{


    public function storeImages(Request $request)
    {

        // validation of images
        $this->validate($request, [
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);


        ImageService::storeImage($request->file('uploaded_images'), $request->property_id);
        // // storing images
        // $filename = time() . rand(0, 3) . '.' . ($request->file('uploaded_images')->getClientOriginalExtension());
        // $request->file('uploaded_images')->storeAs('uploaded_files', $filename, 'uploads');


        // // create new image instance
        // $image = new Image;
        // // create new property instance
        // $property = new RentedProperty;

        // // fill image object with data
        // // add rented property id to image
        // $image->rented_property_id = $property->id;
        // // $image->title = 
        // $image->image_url = 'uploads/uploaded_files/' . $filename;
        // $image->save();


        // // $imagesName = [];
        // $response = [];


        // if ($request->has('images')) {
        //     foreach ($request->file('images') as $image) {
        //         $filename = time() . rand(3) . '.' . $image->getClientOriginalExtension();
        //         $image->storeAs('uploads/', $filename);

        //         Image::create([
        //             'image_name' => $filename
        //         ]);
        //     }

        //     // $response["status"] = "successs";
        //     // $response["message"] = "Success! image(s) uploaded";
        // }
        // //  else {
        // //     $response["status"] = "failed";
        // //     $response["message"] = "Failed! image(s) not uploaded";
        // // }
        // return response()->json($response);
    }
}
