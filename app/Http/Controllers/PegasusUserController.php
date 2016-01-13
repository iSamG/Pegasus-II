<?php namespace App\Http\Controllers;


use App\pegasustwo\Helpers;
use App\User;
use Carbon\Carbon;
use Hash;
use Illuminate\Support\Facades\Auth;
use Input;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Mockery\CountValidator\Exception;

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

        if (Auth::attempt(['username' => $username, 'password' => $password]))
        {

            $authenticated_user = Auth::User();

            $authenticated_user->last_login = Carbon::now();

            $authenticated_user->save();

            return Helpers::responseToView($code = 200, $status = "OK", $message = "Pegasus User logged in successfully", $data = $authenticated_user);

        }

        else{
            return Helpers::responseToView($code = 401, $status = "Failed", $message = "Pegasus User authentication failed");

        }
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
            'password'=> Hash::make($password),
            'email'=>$email,
            'phone_number'=>$phonenumber,
            'country'=>$country
        );

        $validation_patterns = array(
            'username'=>'required|unique',
            'password'=>'required',
            'email'=>'required|unique',
            'phone_number'=>'required',
            'country'=>'required'
        );

        $user_name_exist = \DB::table('users')->where('username',$user_name)->get();
        if($user_name_exist){
            //var_dump($user_name_exist);
            return Helpers::responseToView($code = 301, $status = "failed", $message = "Username already exist",
                $data = $user_name_exist);
        }
        else  if(\DB::table('users')->where('email',$email)->get()){

            return Helpers::responseToView($code = 302, $status = "failed", $message = "Email already exist",
                $data = null);
        }
        else{
            $input_is_valid = \Validator::make($fields, $validation_patterns);

            if($input_is_valid){
                $user = User::create($fields);
                if($user){
                    Auth::attempt(['username' => $user_name, 'password' => $password]);
                }

                return Helpers::responseToView($code = 200, $status = "OK", $message = "Pegasus User logged in successfully",
                    $data = $user);
            }
        }

//        try{
//
//        }
//        catch(Exception $e){
//
//        }




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
    public function edit($id, $old_password, $new_password)
    {
        //

        DB::table('users')
            ->where('id', $id)
            ->where('password', $old_password)
            ->update(['password' => $new_password]);
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
        $logged_out = Auth::logout();
        if(!$logged_out){
            return Helpers::responseToView($code = 200, $status = "OK", $message = "Pegasus User logged out successfully");
        }
        else{
            return Helpers::responseToView($code = 401, $status = "failed", $message = $logged_out);

        }
    }

    public function currentUser(){
        if(Auth::check()){
            $user = Auth::user();
            return Helpers::responseToView($code = 200, $status = "OK", $message = "Pegasus User logged in successfully",
                $data = $user);
        }else{
            return Helpers::responseToView($code = 401, $status = "failed", $message = "No user logged in currently");
        }
    }

    public function renderDashboard()
         {

            // User::create(Request::all());
             return redirect('dashboard');
         }


}
