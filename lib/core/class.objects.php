<?PHP
    // Stick your DBOjbect subclasses in here (to help keep things tidy).

    class User extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('user', array('nid', 'username', 'password', 'level'), $id);
        }
    }

    class Matrix extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('matrix', array('label', 'brief', 'main', 'weight'), $id);
        }
    }

    class Document extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('document', array('user_id'), $id);
        }
    }

    class DocumentQuestions extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('document_questions', array('document_id', 'question_id'), $id);
        }
    }

    class Question extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('question', array('matrix_id', 'question', 'description', 'min', 'max', 'required'), $id);
        }
    }

    class QuestionOptions extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('question_options', array('question_id', 'label', 'value', 'answer'), $id);
        }
    }
