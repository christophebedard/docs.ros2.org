Search.setIndex({docnames:["about","api","api/actions","api/context","api/execution_and_callbacks","api/init_shutdown","api/logging","api/node","api/parameters","api/qos","api/services","api/timers","api/topics","api/utilities","examples","index"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["about.rst","api.rst","api/actions.rst","api/context.rst","api/execution_and_callbacks.rst","api/init_shutdown.rst","api/logging.rst","api/node.rst","api/parameters.rst","api/qos.rst","api/services.rst","api/timers.rst","api/topics.rst","api/utilities.rst","examples.rst","index.rst"],objects:{"":{rclpy:[5,0,0,"-"]},"rclpy.action":{client:[2,0,0,"-"],server:[2,0,0,"-"]},"rclpy.action.client":{ActionClient:[2,1,1,""],ClientGoalHandle:[2,1,1,""]},"rclpy.action.client.ActionClient":{add_to_wait_set:[2,2,1,""],destroy:[2,2,1,""],execute:[2,2,1,""],get_num_entities:[2,2,1,""],is_ready:[2,2,1,""],send_goal:[2,2,1,""],send_goal_async:[2,2,1,""],server_is_ready:[2,2,1,""],take_data:[2,2,1,""],wait_for_server:[2,2,1,""]},"rclpy.action.client.ClientGoalHandle":{accepted:[2,3,1,""],cancel_goal:[2,2,1,""],cancel_goal_async:[2,2,1,""],get_result:[2,2,1,""],get_result_async:[2,2,1,""],goal_id:[2,3,1,""],stamp:[2,3,1,""],status:[2,3,1,""]},"rclpy.action.server":{ActionServer:[2,1,1,""],CancelResponse:[2,1,1,""],GoalEvent:[2,1,1,""],GoalResponse:[2,1,1,""],ServerGoalHandle:[2,1,1,""],default_cancel_callback:[2,4,1,""],default_goal_callback:[2,4,1,""],default_handle_accepted_callback:[2,4,1,""]},"rclpy.action.server.ActionServer":{add_to_wait_set:[2,2,1,""],destroy:[2,2,1,""],execute:[2,2,1,""],get_num_entities:[2,2,1,""],is_ready:[2,2,1,""],notify_execute:[2,2,1,""],notify_goal_done:[2,2,1,""],register_cancel_callback:[2,2,1,""],register_execute_callback:[2,2,1,""],register_goal_callback:[2,2,1,""],register_handle_accepted_callback:[2,2,1,""],take_data:[2,2,1,""]},"rclpy.action.server.CancelResponse":{ACCEPT:[2,3,1,""],REJECT:[2,3,1,""]},"rclpy.action.server.GoalEvent":{CANCEL:[2,3,1,""],EXECUTE:[2,3,1,""],SET_ABORTED:[2,3,1,""],SET_CANCELED:[2,3,1,""],SET_SUCCEEDED:[2,3,1,""]},"rclpy.action.server.GoalResponse":{ACCEPT:[2,3,1,""],REJECT:[2,3,1,""]},"rclpy.action.server.ServerGoalHandle":{destroy:[2,2,1,""],execute:[2,2,1,""],goal_id:[2,3,1,""],is_active:[2,3,1,""],is_cancel_requested:[2,3,1,""],publish_feedback:[2,2,1,""],request:[2,3,1,""],set_aborted:[2,2,1,""],set_canceled:[2,2,1,""],set_succeeded:[2,2,1,""],status:[2,3,1,""]},"rclpy.callback_groups":{CallbackGroup:[4,1,1,""],MutuallyExclusiveCallbackGroup:[4,1,1,""],ReentrantCallbackGroup:[4,1,1,""]},"rclpy.callback_groups.CallbackGroup":{add_entity:[4,2,1,""],beginning_execution:[4,2,1,""],can_execute:[4,2,1,""],ending_execution:[4,2,1,""],has_entity:[4,2,1,""]},"rclpy.callback_groups.MutuallyExclusiveCallbackGroup":{beginning_execution:[4,2,1,""],can_execute:[4,2,1,""],ending_execution:[4,2,1,""]},"rclpy.callback_groups.ReentrantCallbackGroup":{beginning_execution:[4,2,1,""],can_execute:[4,2,1,""],ending_execution:[4,2,1,""]},"rclpy.client":{Client:[10,1,1,""]},"rclpy.client.Client":{call:[10,2,1,""],call_async:[10,2,1,""],remove_pending_request:[10,2,1,""],service_is_ready:[10,2,1,""],wait_for_service:[10,2,1,""]},"rclpy.context":{Context:[3,1,1,""]},"rclpy.context.Context":{handle:[3,3,1,""],ok:[3,2,1,""],shutdown:[3,2,1,""],try_shutdown:[3,2,1,""]},"rclpy.executors":{Executor:[4,1,1,""],MultiThreadedExecutor:[4,1,1,""],SingleThreadedExecutor:[4,1,1,""],TimeoutException:[4,5,1,""],await_or_execute:[4,4,1,""]},"rclpy.executors.Executor":{add_node:[4,2,1,""],can_execute:[4,2,1,""],context:[4,3,1,""],create_task:[4,2,1,""],get_nodes:[4,2,1,""],remove_node:[4,2,1,""],shutdown:[4,2,1,""],spin:[4,2,1,""],spin_once:[4,2,1,""],spin_until_future_complete:[4,2,1,""],wait_for_ready_callbacks:[4,2,1,""]},"rclpy.executors.MultiThreadedExecutor":{spin_once:[4,2,1,""]},"rclpy.executors.SingleThreadedExecutor":{spin_once:[4,2,1,""]},"rclpy.logging":{LoggingSeverity:[6,1,1,""],clear_config:[6,4,1,""],get_logger:[6,4,1,""],get_logger_effective_level:[6,4,1,""],initialize:[6,4,1,""],set_logger_level:[6,4,1,""],shutdown:[6,4,1,""]},"rclpy.logging.LoggingSeverity":{DEBUG:[6,3,1,""],ERROR:[6,3,1,""],FATAL:[6,3,1,""],INFO:[6,3,1,""],UNSET:[6,3,1,""],WARN:[6,3,1,""]},"rclpy.node":{Node:[7,1,1,""]},"rclpy.node.Node":{add_waitable:[7,2,1,""],context:[7,3,1,""],count_publishers:[7,2,1,""],count_subscribers:[7,2,1,""],create_client:[7,2,1,""],create_guard_condition:[7,2,1,""],create_publisher:[7,2,1,""],create_service:[7,2,1,""],create_subscription:[7,2,1,""],create_timer:[7,2,1,""],default_callback_group:[7,3,1,""],destroy_client:[7,2,1,""],destroy_guard_condition:[7,2,1,""],destroy_node:[7,2,1,""],destroy_publisher:[7,2,1,""],destroy_service:[7,2,1,""],destroy_subscription:[7,2,1,""],destroy_timer:[7,2,1,""],executor:[7,3,1,""],get_clock:[7,2,1,""],get_logger:[7,2,1,""],get_name:[7,2,1,""],get_namespace:[7,2,1,""],get_node_names:[7,2,1,""],get_node_names_and_namespaces:[7,2,1,""],get_parameter:[7,2,1,""],get_parameters:[7,2,1,""],get_publisher_names_and_types_by_node:[7,2,1,""],get_service_names_and_types:[7,2,1,""],get_service_names_and_types_by_node:[7,2,1,""],get_subscriber_names_and_types_by_node:[7,2,1,""],get_topic_names_and_types:[7,2,1,""],handle:[7,3,1,""],remove_waitable:[7,2,1,""],set_parameters:[7,2,1,""],set_parameters_atomically:[7,2,1,""],set_parameters_callback:[7,2,1,""]},"rclpy.parameter":{Parameter:[8,1,1,""]},"rclpy.parameter.Parameter":{Type:[8,1,1,""],from_parameter_msg:[8,6,1,""],get_descriptor:[8,2,1,""],get_parameter_value:[8,2,1,""],name:[8,3,1,""],to_parameter_msg:[8,2,1,""],type_:[8,3,1,""],value:[8,3,1,""]},"rclpy.parameter.Parameter.Type":{BOOL:[8,3,1,""],BOOL_ARRAY:[8,3,1,""],BYTE_ARRAY:[8,3,1,""],DOUBLE:[8,3,1,""],DOUBLE_ARRAY:[8,3,1,""],INTEGER:[8,3,1,""],INTEGER_ARRAY:[8,3,1,""],NOT_SET:[8,3,1,""],STRING:[8,3,1,""],STRING_ARRAY:[8,3,1,""],check:[8,2,1,""]},"rclpy.parameter_service":{ParameterService:[8,1,1,""]},"rclpy.publisher":{Publisher:[12,1,1,""]},"rclpy.publisher.Publisher":{publish:[12,2,1,""]},"rclpy.qos":{QoSDurabilityPolicy:[9,1,1,""],QoSHistoryPolicy:[9,1,1,""],QoSProfile:[9,1,1,""],QoSReliabilityPolicy:[9,1,1,""]},"rclpy.qos.QoSDurabilityPolicy":{RMW_QOS_POLICY_DURABILITY_SYSTEM_DEFAULT:[9,3,1,""],RMW_QOS_POLICY_DURABILITY_TRANSIENT_LOCAL:[9,3,1,""],RMW_QOS_POLICY_DURABILITY_VOLATILE:[9,3,1,""]},"rclpy.qos.QoSHistoryPolicy":{RMW_QOS_POLICY_HISTORY_KEEP_ALL:[9,3,1,""],RMW_QOS_POLICY_HISTORY_KEEP_LAST:[9,3,1,""],RMW_QOS_POLICY_HISTORY_SYSTEM_DEFAULT:[9,3,1,""]},"rclpy.qos.QoSProfile":{avoid_ros_namespace_conventions:[9,3,1,""],depth:[9,3,1,""],durability:[9,3,1,""],get_c_qos_profile:[9,2,1,""],history:[9,3,1,""],reliability:[9,3,1,""]},"rclpy.qos.QoSReliabilityPolicy":{RMW_QOS_POLICY_RELIABILITY_BEST_EFFORT:[9,3,1,""],RMW_QOS_POLICY_RELIABILITY_RELIABLE:[9,3,1,""],RMW_QOS_POLICY_RELIABILITY_SYSTEM_DEFAULT:[9,3,1,""]},"rclpy.service":{Service:[10,1,1,""]},"rclpy.service.Service":{send_response:[10,2,1,""]},"rclpy.subscription":{Subscription:[12,1,1,""]},"rclpy.timer":{WallTimer:[11,1,1,""]},"rclpy.timer.WallTimer":{cancel:[11,2,1,""],clock:[11,3,1,""],is_canceled:[11,2,1,""],is_ready:[11,2,1,""],reset:[11,2,1,""],time_since_last_call:[11,2,1,""],time_until_next_call:[11,2,1,""],timer_period_ns:[11,3,1,""]},"rclpy.utilities":{get_default_context:[13,4,1,""],get_rmw_implementation_identifier:[13,4,1,""],ok:[13,4,1,""],remove_ros_args:[13,4,1,""],shutdown:[13,4,1,""],timeout_sec_to_nsec:[13,4,1,""],try_shutdown:[13,4,1,""]},rclpy:{callback_groups:[4,0,0,"-"],client:[10,0,0,"-"],context:[3,0,0,"-"],create_node:[5,4,1,""],executors:[4,0,0,"-"],get_global_executor:[5,4,1,""],init:[5,4,1,""],logging:[6,0,0,"-"],node:[7,0,0,"-"],parameter:[8,0,0,"-"],parameter_service:[8,0,0,"-"],publisher:[12,0,0,"-"],qos:[9,0,0,"-"],service:[10,0,0,"-"],shutdown:[5,4,1,""],spin:[5,4,1,""],spin_once:[5,4,1,""],spin_until_future_complete:[5,4,1,""],subscription:[12,0,0,"-"],timer:[11,0,0,"-"],utilities:[13,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:classmethod"},terms:{"1ns":13,"class":[2,3,4,6,7,8,9,10,11,12],"default":[2,4,5,13],"enum":[6,9],"final":[2,3],"float":[4,13],"function":[2,4],"int":[4,9,13],"long":[2,5],"new":2,"return":[2,4,5,7,9,10,13],"true":[2,4,5,7],One:5,QoS:[2,9],ROS:[0,2,15],The:[0,2,4,5,7,10],There:[2,4],Used:2,_wait_for_ready_callback:4,about:[2,15],accept:2,acknowledg:2,action:[1,15],action_cli:2,action_nam:2,action_serv:2,action_typ:2,actioncli:2,actionserv:2,actual:4,add:[2,4,5,7],add_ent:4,add_nod:4,add_to_wait_set:2,add_wait:7,added:[4,7],after:[2,4],again:2,all:[2,4],allow:4,alreadi:[3,13],also:4,alwai:5,ani:[2,4],api:[0,15],arg:[4,5,13],argument:[2,4],associ:[2,4,5],asynchron:2,asyncron:10,attribut:9,avail:2,avoid_ros_namespace_convent:9,await:4,await_or_execut:4,base:4,been:[2,4,7],befor:5,begin:4,beginning_execut:4,being:2,block:[4,5,13],bool:[4,8,9],bool_arrai:8,built:0,byte_arrai:8,call:[2,4,5,10],call_async:10,callabl:4,callback:[1,2,5,7,10,11,12,15],callback_group:[2,4,7,10,11,12],callbackgroup:4,can:[2,4,13,14],can_execut:4,cancel:[2,11],cancel_callback:2,cancel_go:2,cancel_goal_async:2,cancel_request:2,cancel_service_qos_profil:2,cancelrespons:2,canon:[0,15],capabl:7,caus:2,check:[2,5,8],classmethod:8,cleanup:4,clear:6,clear_config:6,cli_arg:[5,7],client:[1,4,7,15],client_handl:10,client_point:10,clientgoalhandl:2,clock:11,command:5,common:0,compat:13,complet:[2,4,5,10],compon:4,concurr:4,condit:4,configur:6,construct:2,constructor:2,contain:2,content:1,context:[1,4,5,7,10,11,13,15],control:4,convert:13,coroutin:[4,5],count:7,count_publish:7,count_subscrib:7,cpu_count:4,creat:5,create_cli:7,create_guard_condit:7,create_nod:5,create_publish:7,create_servic:7,create_subscript:7,create_task:4,create_tim:7,creation:5,custom:4,data:2,deadlock:[2,10],debug:6,decid:2,default_callback_group:7,default_cancel_callback:2,default_goal_callback:2,default_handle_accepted_callback:2,defer:2,defin:[2,4,6,9],depth:9,destroi:2,destroy_cli:7,destroy_guard_condit:7,destroy_nod:7,destroy_publish:7,destroy_servic:7,destroy_subscript:7,destroy_tim:7,destructor:3,determin:4,document:4,doe:10,doesn:2,don:[4,5,13],done:[4,5,10],doubl:8,double_arrai:8,durabl:9,dure:[4,5],each:2,els:[4,7],encapsul:3,ending_execut:4,enforc:4,entiti:[2,4],enumer:8,error:6,etc:4,event:2,exampl:15,exceed:2,except:4,execut:[1,2,5,10,15],execute_callback:2,executor:[1,5,7,15],expand:7,expect:2,expir:5,extend:4,fail:2,fals:[2,4,5,7,13],fatal:6,feedback:2,feedback_callback:2,feedback_msg:2,feedback_pub_qos_profil:2,feedback_sub_qos_profil:2,field:9,finish:[2,4],forev:[4,5,13],found:14,from:[2,4,10],from_parameter_msg:8,fulli:7,futur:[2,4,5,10],gener:[2,4],get:[2,4,7,9,10],get_c_qos_profil:9,get_clock:7,get_default_context:13,get_descriptor:8,get_global_executor:5,get_logg:[6,7],get_logger_effective_level:6,get_nam:7,get_namespac:7,get_nod:4,get_node_nam:7,get_node_names_and_namespac:7,get_num_ent:2,get_paramet:7,get_parameter_valu:8,get_publisher_names_and_types_by_nod:7,get_result:2,get_result_async:2,get_rmw_implementation_identifi:13,get_service_names_and_typ:7,get_service_names_and_types_by_nod:7,get_subscriber_names_and_types_by_nod:7,get_topic_names_and_typ:7,github:14,give:5,given:[2,4,7],global:[4,5,13],goal:2,goal_callback:2,goal_handl:2,goal_id:2,goal_info:2,goal_request:2,goal_respons:2,goal_service_qos_profil:2,goal_uuid:2,goalev:2,goalinfo:2,goalrespons:2,going:2,group:[1,2,15],guard:[4,7],handl:[2,3,7],handle_accepted_callback:2,has:[2,4,5,7],has_ent:4,have:4,header:10,histori:9,how:2,identifi:2,ignor:5,immedi:2,implement:4,indefinit:2,index:15,info:[2,6],init:[3,5],initi:[1,4,6,15],initial_paramet:[5,7],instanc:[2,4,5,10],integ:[8,13],integer_arrai:8,interact:[2,15],is_act:2,is_cancel:11,is_cancel_request:2,is_readi:[2,11],item:5,its:10,itself:7,kept:2,keyword:2,kwarg:[2,4,9],level:[2,6],librari:5,lifecycl:3,like:4,line:5,list:[4,5,10],log:[1,15],logger:6,loggingsever:6,lower:2,mai:[2,5,7,10],make:10,manag:4,match:[6,9],messag:2,method:[2,5,10],model:4,modul:15,more:2,msg:12,msg_type:[7,12],multiprocess:4,multithreadedexecutor:4,must:[2,4,6],mutuallyexclusivecallbackgroup:4,name:[2,5,6,7,8],namespac:[5,7],nanosecond:13,neg:[4,5,13],newli:2,no_demangl:7,node:[1,2,4,5,8,15],node_handl:[10,12],node_nam:[5,7],node_namespac:7,none:[2,4,5,7,8,10,11,13],not_set:8,notifi:4,notify_execut:2,notify_goal_don:2,num_thread:4,number:[2,4,7,13],object:[2,3,5,7],occur:[2,4,10],one:[2,4,5,6,7,9],onli:[2,4,5],origin:2,other:5,otherwis:[2,4],outstand:4,page:15,parallel:4,param:[2,10],param_msg:8,paramet:[1,2,4,5,7,10,13,15],parameter_list:7,parameter_servic:8,parameter_valu:8,parameterservic:8,part:2,partial:5,pass:[2,4,5],pend:10,per:2,perform:4,permiss:4,point:13,polici:9,pool:4,possibl:[2,5],prefix:5,prevent:10,previous:2,privat:7,process:[2,4,5],profil:2,provid:[0,2,15],publish:[1,2,7,15],publish_feedback:2,publisher_handl:12,purpos:2,python:[0,13,15],qos:[2,7,9],qos_profil:[7,10,12],qosdurabilitypolici:9,qoshistorypolici:9,qosprofil:[2,7,9],qosreliabilitypolici:9,qualif:7,qualiti:[1,15],queri:7,queu:2,rais:2,random:2,raw:[7,12],rcl:[0,13],rcl_context_t:3,rcl_wait:13,rclpy:[0,2,3,4,5,6,7,8,9,10,11,12,13,14],rcutil:6,reach:2,readi:[2,4,5],receipt:2,receiv:[2,4,10],reentrantcallbackgroup:4,regardless:5,regist:2,register_cancel_callback:2,register_execute_callback:2,register_goal_callback:2,register_handle_accepted_callback:2,reject:2,rel:[5,7],reliabl:9,remap:7,remov:[7,10],remove_nod:4,remove_pending_request:10,remove_ros_arg:13,remove_wait:7,replac:2,repres:2,req:10,request:[2,10],reset:11,respond:2,respons:[2,4,10],restrict:4,result:[2,10],result_service_qos_profil:2,result_timeout:2,reus:[3,4],rmw:9,rmw_qos_policy_durability_system_default:9,rmw_qos_policy_durability_transient_loc:9,rmw_qos_policy_durability_volatil:9,rmw_qos_policy_history_keep_al:9,rmw_qos_policy_history_keep_last:9,rmw_qos_policy_history_system_default:9,rmw_qos_policy_reliability_best_effort:9,rmw_qos_policy_reliability_reli:9,rmw_qos_policy_reliability_system_default:9,ros2:14,rule:4,run:4,runtimeerror:2,search:15,second:[2,4,5,13],see:[2,4],send:2,send_goal:2,send_goal_async:2,send_respons:10,server:[1,15],server_is_readi:2,servergoalhandl:2,servic:[1,2,4,5,7,15],service_handl:10,service_is_readi:10,service_point:10,set:[2,5,7,9],set_abort:2,set_cancel:2,set_logger_level:6,set_paramet:7,set_parameters_atom:7,set_parameters_callback:7,set_succeed:2,sever:[2,6],should:[2,3,4,5],shutdown:[1,3,4,6,13,15],shutting_down:13,signal:4,singl:4,singlethreadedexecutor:[4,5],singleton:13,soon:2,spin:[1,4,15],spin_onc:[4,5],spin_until_future_complet:[4,5],srv_name:[7,10],srv_type:[7,10],stamp:2,start_parameter_servic:[5,7],state:2,statu:2,status_pub_qos_profil:2,status_sub_qos_profil:2,stop:4,str:7,string:[5,8],string_arrai:8,stuff:2,style:13,subscrib:[2,7],subscript:[1,4,7,15],subscription_handl:12,subscription_point:12,system:6,take:2,take_data:2,taken:2,taken_data:2,task:[2,4,5,10],tend:13,termin:2,than:5,therefor:2,thi:[2,4,5,6,7,9,10,13],thing:7,thread:4,time:4,time_since_last_cal:11,time_until_next_cal:11,timeout:[2,4,5,13],timeout_sec:[2,4,5,10,13],timeout_sec_to_nsec:13,timeoutexcept:4,timer:[1,4,7,15],timer_period_n:11,timer_period_sec:7,to_parameter_msg:8,topic:[1,2,5,7,15],topic_nam:7,track:2,transit:2,try_shutdown:[3,13],two:4,type:[2,3,4,5,8,9,10,13],type_:8,underli:2,uniqu:[2,5],unique_identifier_msg:2,unit:4,univers:2,unlik:2,unregist:2,unset:6,until:[2,4,5],updat:2,use:[4,5,13],use_global_argu:[5,7],used:[2,4,5,13],user:2,using:7,util:[1,15],uuid:2,valu:[2,8],wait:[2,4,5,7,10,13],wait_for_ready_callback:4,wait_for_serv:2,wait_for_servic:10,wait_set:2,waitabl:7,wake:2,walltim:11,warn:6,when:[2,4,10],whenev:2,whether:5,which:[2,4,5,7],whose:4,wide:5,without:4,work:[2,4,5],worker:4,wrap:3},titles:["About","API","Actions","Context","Execution and Callbacks","Initialization, Shutdown, and Spinning","Logging","Node","Parameters","Quality of Service","Services","Timer","Topics","Utilities","Examples","rclpy"],titleterms:{about:0,action:2,api:1,callback:4,client:[2,10],context:3,exampl:14,execut:4,executor:4,group:4,indic:15,initi:5,log:6,node:7,paramet:8,publish:12,qualiti:9,rclpy:15,server:2,servic:[8,9,10],shutdown:5,spin:5,subscript:12,tabl:15,timer:11,topic:12,util:13}})