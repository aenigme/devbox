<?PHP
    // Stick your DBOjbect subclasses in here (to help keep things tidy).

    class User extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('users', array('nid', 'username', 'password', 'level'), $id);
        }
    }

    class Survey extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('survey', array('timestamp', 'ip', 'q1_a1', 'q1_a2', 'q1_a3', 'q1_a4', 'q1_a5', 'q1_a5', 'q1_a6', 'q1_a7', 'q1_a8', 'q1_noa', 'q2_first', 'q2_second', 'q2_third', 'complete', 'endtime'), $id);
        }
    }

    class Employee extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('employees', array('username', 'displayname', 'department', 'timestamp', 'fname', 'lname'), $id, 'username');
        }
    }

    class Punch extends DBObject
    {
        public function __construct($id = null)
        {
            parent::__construct('punches', array('username', 'punch', 'timestamp'), $id);
        }
    }
