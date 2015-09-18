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
            $table->string('unique_question_id');
            $table->enum('question_type', ['open', 'close']);
            $table->enum('question_position', ['beginning', 'middle','end']);
            $table->string('question');
            $table->string('entry_question_unique_id')->nullable();
            $table->string('exit_question_unique_id')->nullable();
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