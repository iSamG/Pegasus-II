<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('survey_id');
            $table->bigInteger('name_of_respondent');/*Make this nullable*/
            $table->bigInteger('email');/*Make this nullable*/
            $table->bigInteger('phone_number');/*Make this nullable*/
            $table->string('answer_response');
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
        Schema::drop('answers');
    }
}
