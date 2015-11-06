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
            $table->string('name_of_respondent')->nullable();/*Make this nullable*/
            $table->string('email')->nullable();/*Make this nullable*/
            $table->string('phone_number')->nullable();/*Make this nullable*/
            $table->text('answer_response');
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
