<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSurveysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('surveys', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('user_id');
            $table->string('survey_name');/*This is required*/
            $table->enum('survey_type',['private','public'])->default('public'); //Just a thinking, suggest if any comes up
            $table->enum('survey_medium',['email','sms','ivr','any'])->default('any'); //Just a thinking, suggest if any comes up
            $table->string('question_tree');/*Make this nullable; its should be able to contain large number of characters*/
            $table->timestamp('start_date');/*Make this nullable*/
            $table->timestamp('end_date');/*Make this nullable*/
            $table->boolean('status')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('surveys');
    }
}
