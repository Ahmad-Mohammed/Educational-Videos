<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;

class VideoRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */

    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required',
            'image' => 'required|image',
            'video' => 'required',
            'description' => 'required',
            'categoryname' => 'required'
        ];
    }
    public function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(response()->json([
            'data'   => null,
            'message'   =>  $validator->errors(),
            'status'      => JsonResponse::HTTP_BAD_REQUEST
        ]));
    }




    public function messages(): array
    {
        return [
            'title.required' => 'A title is required',
            'image.required' => 'A image is required',
            'video.required' => 'A video is required',
            'description.required' => 'A description is required',
        ];
    }
}
