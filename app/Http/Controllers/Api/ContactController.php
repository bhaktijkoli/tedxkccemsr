<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\Http\Requests\SendContactRequest;

use App\Message;

class ContactController extends Controller
{
  public function postContact(SendContactRequest $request) {
    $message = new Message();
    $message->name = $request->input('name', '');
    $message->email = $request->input('email', '');
    $message->subject = $request->input('subject', '');
    $message->message = $request->input('message', '');
    $message->save();
    return "Ok";
  }
}
