<?php namespace App\Http\Controllers;


use Illuminate\Support\Facades\Auth;
use Input;

class PegasusUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index()
    {
        //
    }

    public function authenticate(){

        $user_details = Input::all();
        $username = $user_details['username'];
        $password = $user_details['password'];

        var_dump($username." ".$password);
        if (Auth::attempt(['username' => $username, 'password' => $password]))
        {

            var_dump("it showwwwwwssss");
            exit();
            $authenticated_user = Auth::User();

            $authenticated_user->last_login = Carbon::now();

            $authenticated_user->save();


            return Helpers::responseToView($code = 200, $status = "OK", $message = "Pegasus User logged in successfully", $data = $authenticated_user);

        }

        return "baad";

       // return Helpers::responseToView($code = 401, $status = "Failed", $message = "Pegasus User authentication failed");
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create()
    {
        //
        /********************
        $user_name = Input::get('username');
        $email = Input::get('email');
        $password = Input::get('password');
        $phonenumber = Input::get('phonenumber');
        $country = Input::get('country');
        **********************/

        $details = \Input::all();
        $user_name = $details['username'];
        $email = $details['email'];
        $password = $details['password'];
        $phonenumber = $details['phone_number'];
        $country = $details['country'];

        $fields = array(
            'username'=>$user_name,
            'password'=>$password,
            'email'=>$email,
            'phone_number'=>$phonenumber,
            'country'=>$country
        );

        $validation_patterns = array(
            'username'=>'required',
            'password'=>'required',
            'email'=>'required',
            'phone_number'=>'required',
            'country'=>'required'
        );

        $input_is_valid = \Validator::make($fields, $validation_patterns);
        if($input_is_valid){
            User::create($fields);
        }
        else{

        }

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     * @return Response
     */
    public function store()
    {

       // User::create(Request::all());
        return redirect('dashboard');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request  $request
     * @param  int  $id
     * @return Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return Response
     */
    public function destroy($id)
    {
        //
    }

    public function logout(){
        Auth::logout();
    }

    public function currentUser(){
        if(Auth::check()){
            return Auth::user();
        }
    }
}
