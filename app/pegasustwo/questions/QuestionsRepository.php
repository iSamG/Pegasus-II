<?php namespace App\pegasustwo\questions;
use App\Answer;
use App\pegasustwo\Helpers;
use App\Question;

/**
 * Created by PhpStorm.
 * User: Gbeila Aliu Wahab
 * Date: 10/4/2015
 * Time: 10:34 AM
 */

class QuestionsRepository {

    public function createANewQuestion($create_questions_details = [])
    {

        $generate_question_unique_code = Helpers::generateQuestionUniqueCode();

        $create_questions_details = array_add($create_questions_details, 'question_unique_code', $generate_question_unique_code);

        $save_the_new_question = Question::create($create_questions_details);

            if ($save_the_new_question) {

                return Helpers::responseToView($code = 200, $status= "OK", $message = "Question created successfully", $data = ['question' => $save_the_new_question]);

            }else{

                return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to create question, please try again", $data = ['question' => $create_questions_details]);
            }

    }







    public function editAnExistingQuestion($edit_question_details = [])
    {
        $survey_id = $edit_question_details['survey_id'];

        $question_to_edit_id = $edit_question_details['question_id'];

        $edited_details_of_the_question = array_except($edit_question_details, ['question_id','old_question_type','new_question_type', 'answer_options']);

        $update_the_edited_question = DB::table('questions')->where('id', $question_to_edit_id)->where('survey_id', $survey_id)->update($edited_details_of_the_question);

        if ($update_the_edited_question) {

            return Helpers::responseToView($code = 200, $status= "OK", $message = "Question edited successfully", $data = ['question' => $update_the_edited_question]);

        }else{

            return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to edit question and its answer options question, try again", $data = ['question' => $update_the_edited_question]);
        }

    }







    public function deleteAQuestion($delete_question_details = [])
    {
        $survey_id = $delete_question_details['survey_id'];

        $question_to_delete_id = $delete_question_details['question_id'];

        $survey = \DB::table('surveys')->where('id',$survey_id)->first();

        if ($survey->status == 0) {

            $delete_question = \DB::table('questions')->where('id',$question_to_delete_id)->where('survey_id',$survey_id)->delete();

            if ($delete_question) {

                return Helpers::responseToView($code = 200, $status = "OK", $message = "Question deleted successfully");

            }else{

                return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to delete question, please check and try again");

            }

        }else{

            return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to delete question, because survey is currently running, to delete chane the survey status");

        }

    }






















//PREVIOUS CODE BELOW FOR THE INNITIAL THOUGHT STRUCTURE
//
//    public function createANewQuestion($create_questions_details = [])
//    {
//        $question_type = $create_questions_details['question_type'];
//
//        $answer_type = $create_questions_details['answer_type'];
//
//        $generate_question_unique_code = Helpers::generateQuestionUniqueCode();
//
//        $create_questions_details = array_except($create_questions_details,['answer_options']);
//
//        $answer_options = $create_questions_details['answer_options'];
//
//        $create_questions_details = array_add($create_questions_details, 'question_unique_code', $generate_question_unique_code);
//
//        $save_the_new_question = Question::create($create_questions_details);
//
//
//        if ($question_type == 'close_ended') {
//
//            if ($save_the_new_question) {
//
//                $answer_options_details = [
//                    'question_id' => $save_the_new_question->id,
//                    'question_unique_code' => $generate_question_unique_code,
//                    'answer_options' => $answer_options,
//                   'answer_type' => $answer_type];
//                $save_the_answer_options = Answer::create($answer_options_details);
//
//                if ($save_the_answer_options) {
//
//                    return Helpers::responseToView($code = 200, $status= "OK", $message = "Question with its answer options created successfully", $data = ['question' => $save_the_new_question, 'answer_options' => $save_the_answer_options]);
//
//                }else{
//
//                    $delete_the_question = \DB::table('questions')->where('id',$save_the_new_question->id)->delete();
//
//                    return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to create question with its answer options, try again", $data = ['question' => $create_questions_details, 'answer_options' => $save_the_answer_options]);
//
//                }
//
//            }
//
//        }else{
//
//            if ($save_the_new_question) {
//
//                return Helpers::responseToView($code = 200, $status= "OK", $message = "Question created successfully", $data = ['question' => $save_the_new_question]);
//
//            }else{
//
//                return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to create question, try again", $data = ['question' => $create_questions_details]);
//
//            }
//
//        }
//
//    }


//
//
//    public function editAnExistingQuestion($edit_question_details = [])
//    {
//
//        $question_to_edit_id = $edit_question_details['question_id'];
//
//        $old_question_type = $edit_question_details['old_question_type'];
//
//        $new_question_type = $edit_question_details['new_question_type'];
//
//        $edited_details_of_the_question = array_except($edit_question_details, ['question_id','old_question_type','new_question_type', 'answer_options']);
//
//        if ($new_question_type == 'close_ended') {
//
//
//            $update_the_edited_question = DB::table('questions')->where('id', $question_to_edit_id)->update($edited_details_of_the_question);
//
//            $edited_details_of_answer_options = ['question_id' => $question_to_edit_id,
//                        'question_unique_code' => $update_the_edited_question->question_unique_code,
//                        'answer_options' => $edit_question_details['answer_options'],
//                        'answer_display_type' => $edit_question_details['answer_display_type']
//            ];
//
//
//
//            if ($old_question_type == 'close_ended') {
//
//                $update_answer_options = DB::table('answer_options')->where('question_id', $question_to_edit_id)->update($edited_details_of_answer_options);
//
//                if ($update_answer_options) {
//
//                    return Helpers::responseToView($code = 200, $status= "OK", $message = "Question and its answer options edited successfully", $data = ['question' => $update_the_edited_question, 'answer_options' => $update_answer_options]);
//
//                }else{
//
//                    return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to edit question and its answer options question, try again", $data = ['question' => $update_the_edited_question, 'answer_options' => $edited_details_of_answer_options]);
//
//                }
//
//            }else{
//
//                $save_the_answer_options = Answer::create($edited_details_of_answer_options);
//
//                if ($save_the_answer_options) {
//
//                    return Helpers::responseToView($code = 200, $status= "OK", $message = "Question and its answer options edited successfully", $data = ['question' => $update_the_edited_question, 'answer_options' => $save_the_answer_options]);
//
//                }
//
//                return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to edit question and its answer options question, try again", $data = ['question' => $update_the_edited_question, 'answer_options' => $edited_details_of_answer_options]);
//
//
//            }
//
//
//
//
//        }else{
//
//            $update_the_edited_question = DB::table('questions')->where('id', $question_to_edit_id)->update($edited_details_of_the_question);
//
//            if ($old_question_type == 'close_ended') {
//
//                $delete_the_question = \DB::table('answer_options')->where('question_id',$question_to_edit_id->id)->delete();
//
//            }
//
//            return Helpers::responseToView($code = 200, $status= "OK", $message = "Question edited successfully", $data = ['question' => $update_the_edited_question]);
//
//        }
//
//
//    }


//    public function deleteAQuestion($delete_question_details = [])
//    {
//        $question_to_delete_id = $delete_question_details['question_id'];
//
//        $question_type = $delete_question_details['question_type'];
//
//
//        if ($question_type == 'close_ended') {
//
//            $answer_options_id = $delete_question_details['answer_option_id'];
//
//            $delete_the_question = \DB::table('questions')->where('id',$question_to_delete_id)->delete();
//
//            if ($delete_the_question) {
//
//                $delete_answer_options = \DB::table('answer_options')->where('id',$answer_options_id)->delete();
//
//                return Helpers::responseToView($code = 200, $status= "OK", $message = "Question deleted successfully");
//
//            }
//
//            return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to delete question, please try again");
//
//
//        }else{
//
//            $delete_the_question = \DB::table('questions')->where('id',$question_to_delete_id)->delete();
//
//            if ($delete_the_question) {
//
//                return Helpers::responseToView($code = 200, $status= "OK", $message = "Question deleted successfully");
//
//            }
//
//            return Helpers::responseToView($code = 401, $status= "Failed", $message = "Unable to delete question, please check and try again");
//
//        }
//
//    }




}