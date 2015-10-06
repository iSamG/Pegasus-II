<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('questions', function(Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigIncrements('survey_id');
            $table->enum('question_type', ['open_ended', 'close_ended']);
            $table->enum('input_type', ['radio', 'checkboxes','text','date','dropdown','time','number','website','email','price','address','gps','image','video']);
            $table->string('question');
            $table->string('question_unique_code');/*i will post this one from the front end. No need to generate from the server*/
            $table->string('answer_options');/*should be able to contain large number of characters*/
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
        Schema::drop('questions');
    }
}
