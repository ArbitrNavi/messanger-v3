<?php

namespace App\Http\Controllers\Api;

use App\Events\Message;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function message(Request $request)
    {
        event(new Message(
            $request->user()->id,
            $request->messageId,
            $request->text,
            $request->time,
        ));
    }
}
