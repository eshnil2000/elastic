Search.setIndex({docnames:["agent","customization","distributed","examples","index","kubernetes","metrics","quickstart","rendezvous","runtime","timer","train_script"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["agent.rst","customization.rst","distributed.rst","examples.rst","index.rst","kubernetes.rst","metrics.rst","quickstart.rst","rendezvous.rst","runtime.rst","timer.rst","train_script.rst"],objects:{"torchelastic.agent":{server:[0,0,0,"-"]},"torchelastic.agent.server":{ElasticAgent:[0,1,1,""],SimpleElasticAgent:[0,1,1,""],Worker:[0,1,1,""],WorkerGroup:[0,1,1,""],WorkerSpec:[0,1,1,""],WorkerState:[0,1,1,""]},"torchelastic.agent.server.ElasticAgent":{get_worker_group:[0,2,1,""],run:[0,2,1,""]},"torchelastic.agent.server.SimpleElasticAgent":{_initialize_workers:[0,2,1,""],_monitor_workers:[0,2,1,""],_rendezvous:[0,2,1,""],_restart_workers:[0,2,1,""],_start_workers:[0,2,1,""],_stop_workers:[0,2,1,""],get_worker_group:[0,2,1,""],run:[0,2,1,""]},"torchelastic.agent.server.api":{MonitorResult:[0,1,1,""]},"torchelastic.agent.server.local_elastic_agent":{LocalElasticAgent:[0,1,1,""]},"torchelastic.distributed":{launch:[2,0,0,"-"]},"torchelastic.metrics":{configure:[6,3,1,""],prof:[6,3,1,""],put_metric:[6,3,1,""]},"torchelastic.metrics.api":{ConsoleMetricHandler:[6,1,1,""],MetricHandler:[6,1,1,""],NullMetricHandler:[6,1,1,""]},"torchelastic.rendezvous":{RendezvousClosedException:[8,1,1,""],RendezvousHandler:[8,1,1,""],RendezvousNonRetryableError:[8,1,1,""],RendezvousTimeoutException:[8,1,1,""]},"torchelastic.rendezvous.RendezvousHandler":{is_closed:[8,2,1,""],next_rendezvous:[8,2,1,""],num_nodes_waiting:[8,2,1,""],set_closed:[8,2,1,""]},"torchelastic.rendezvous.etcd_rendezvous":{EtcdRendezvous:[8,1,1,""],EtcdRendezvousHandler:[8,1,1,""],EtcdStore:[8,1,1,""]},"torchelastic.rendezvous.etcd_rendezvous.EtcdRendezvous":{announce_self_waiting:[8,2,1,""],confirm_membership:[8,2,1,""],confirm_phase:[8,2,1,""],handle_existing_rendezvous:[8,2,1,""],handle_join_last_call:[8,2,1,""],init_phase:[8,2,1,""],join_phase:[8,2,1,""],join_rendezvous:[8,2,1,""],rendezvous_barrier:[8,2,1,""],set_closed:[8,2,1,""],try_create_rendezvous:[8,2,1,""],wait_for_final:[8,2,1,""],wait_for_peers:[8,2,1,""],wait_for_rendezvous_to_free:[8,2,1,""]},"torchelastic.rendezvous.etcd_rendezvous.EtcdStore":{add:[8,2,1,""],check:[8,2,1,""],get:[8,2,1,""],set:[8,2,1,""],set_timeout:[8,2,1,""],wait:[8,2,1,""]},"torchelastic.rendezvous.etcd_server":{EtcdServer:[8,1,1,""]},"torchelastic.timer":{LocalTimerClient:[10,1,1,""],LocalTimerServer:[10,1,1,""],TimerClient:[10,1,1,""],TimerRequest:[10,1,1,""],TimerServer:[10,1,1,""],configure:[10,3,1,""],expires:[10,3,1,""]},"torchelastic.timer.TimerClient":{acquire:[10,2,1,""],release:[10,2,1,""]},"torchelastic.timer.TimerServer":{clear_timers:[10,2,1,""],get_expired_timers:[10,2,1,""],register_timers:[10,2,1,""]},torchelastic:{agent:[0,0,0,"-"],distributed:[2,0,0,"-"],metrics:[6,0,0,"-"],rendezvous:[8,0,0,"-"],timer:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"0rc":9,"0rc1":3,"30s":8,"600s":8,"abstract":0,"byte":8,"case":[3,4,8,10,11],"class":[0,1,6,8,10],"default":[0,3,6,8],"export":[3,11],"final":[0,8],"float":10,"function":[0,2,3,6,8],"import":[1,2,6,10],"int":[0,1,6,8],"long":8,"new":[0,1,2,3,8],"null":6,"return":[0,1,8,10],"short":8,"true":10,"try":[0,1,6,8],"var":[8,11],"void":0,"while":[0,3,8],AWS:4,For:[0,2,3,6,8,11],NOT:[0,2,8,10],ONE:7,One:1,Such:8,That:[0,2],The:[0,1,2,3,6,7,8,9,10],There:8,Use:[0,4,8],Used:[2,8],Useful:8,Uses:8,Using:[1,6],_initialize_work:0,_monitor_work:0,_rendezv:0,_restart_work:0,_start_work:0,_stop_work:0,abil:1,abl:8,about:[0,1,2,6,7],abov:[8,10],accord:0,accordingli:0,acquir:10,acquisit:10,across:0,action:0,activ:10,actual:0,add:[6,8],added:6,adding:6,addit:[2,8],admit:[2,8],advanc:[0,4],advertis:7,after:[1,8,10],agent:[2,4,6,7,10],agre:[1,8],aliv:8,all:[0,1,2,3,6,7,8,10,11],all_reduc:10,alloc:8,allow:[0,1,2,8],alreadi:8,also:[3,6,8],altern:3,alwai:10,among:1,amount:8,ani:[0,1,2,3,4,8,10],announc:8,announce_self_wait:8,api:[0,1,2,3,4,6,7,8,10],appli:[0,2],applic:3,appropri:3,approxim:8,arch:3,arg1:[2,7],arg:[0,1,2,7,10,11],argument:[0,2,11],argv:11,arriv:[2,8],aspect:3,assgin:2,assign:[0,2,8],assum:[0,2,8],assumpt:[2,6],atom:8,attempt:[2,3,8],automat:[2,8],avail:[0,2,3,8],avoid:3,awai:4,back:8,backend:[2,8,11],bar:6,bare:3,barrier:8,base:[0,3,4,8],basecontext:10,basic:8,batch:[2,3,11],baz:6,becaus:8,becom:8,been:[8,11],befor:[2,3,6,8,10],begin:8,behavior:2,being:[0,3,8,10],belong:6,below:[0,1,3,6,8,9,10,11],best:8,better:0,between:[1,2,3,8,10],bin:8,binari:8,bitnami:3,block:[8,10],blueprint:0,bone:3,bool:[8,10],both:[0,2,8],box:[2,3],built:3,c10:8,c10d:[2,8],calcul:6,calculate_lat:6,call:[0,8,10],caller:[0,8],can:[0,1,2,3,4,6,7,8,10],capac:4,captur:1,care:3,caus:8,certain:6,chang:[0,2,4,8],check:[0,8],checkpoint:[2,11],checkpoint_path:[2,11],class_nam:6,classif:3,classnam:6,classy_train:3,classy_vis:3,clear:10,clear_tim:10,client:[7,8],clone:3,close:8,cloud:4,cluster:[2,8,9],code:[1,2,10],collect:[0,8],com:3,combin:8,come:[6,8],command:[2,3],common:[1,8],commun:[0,1,3,8,10],compat:0,complet:[0,8,10],complex:1,compliant:11,compon:1,compos:3,compris:2,concept:1,conclud:8,concret:11,config:3,config_fil:3,configur:[0,1,2,6,8,10],confirm:8,confirm_membership:8,confirm_phas:8,connect:8,consid:[0,8],consist:[1,2,8],consol:6,consolemetrichandl:6,consolemetricshandl:6,constantli:1,contain:[0,2],content:1,context:[0,2,8,10],continu:11,contrast:0,control:[0,3,5,8,9],conveni:[6,8],coordin:0,copi:0,correl:2,correspond:1,could:[0,8],count:6,countdown:10,counter:8,crash:8,creat:[0,1,2,3,8],critic:[4,8],cross:0,cumbersom:8,current:[1,2,8],custom:[3,4,5,6,7],daemon:10,data:[0,1,3,6,8,10],dataset:[2,11],datetim:8,deadlin:[8,10],deal:[0,10],debug:6,decentr:0,decid:8,decis:[0,8,10],decor:6,def:[0,1,2,6,10,11],def_nam:6,defens:0,defin:[0,2],definit:[2,5],delai:8,deleg:0,demand:4,departur:2,depend:[0,2,3,10],deploi:[0,3,8],deploy:[0,2,8],deprec:4,describ:[0,1,8],descript:[1,8],design:[4,6,8],destin:6,destroi:8,detail:1,detect:[0,8],determin:1,dev:[3,6],devic:[3,10],diagram:[0,8],dict:[0,10],did:[0,8],differ:[1,2,3,6,8,11],difficult:1,directli:[0,7],discoveri:8,dist:2,distribut:[0,1,2,3,4,7,8,10,11],doc:8,dockerfil:3,document:1,doe:[0,3,6,7,8,10],doing:8,don:7,done:1,doubl:0,down:[0,2],due:[1,4,8],durat:[6,8],dure:[0,8],dynam:4,each:[0,1,2,3,10,11],easi:8,effect:10,either:[3,4,8,10],elast:[1,3,4,5,7,9,11],elastic_ag:1,elasticag:0,elig:10,els:8,emit:[1,6],empti:[0,8],enabl:[2,4,7],encod:[0,6],encourag:[0,9],end:[3,6],endpoint:[2,8],enough:3,ensur:[8,11],entir:[0,2,3],entiti:10,entri:[2,8],env:[8,11],environ:[0,2,3,8,11],epoch:[3,11],equal:[2,8,10],error:[0,1,8],especi:3,essenti:0,establish:3,etc:[0,8],etcd:[1,2,3,7,11],etcd_address:8,etcd_binary_path:8,etcd_client:8,etcd_host:[2,7],etcd_port:[2,7],etcd_prefix:8,etcd_rendezv:8,etcd_serv:8,etcd_store_prefix:8,etcdrendezv:[2,8],etcdrendezvoushandl:8,etcdrendezvousretryablefailur:8,etcdserv:8,etcdstor:8,even:0,event:[0,1],eventu:8,everi:8,everyon:[0,8],exact:[0,10],exactli:10,exampl:[0,1,4,6,8,10,11],example_1:3,except:[0,1,6],exchang:[1,8],exclud:8,exclus:8,execut:[1,2,4],exist:[0,2,8],exit:[0,8],expect:[0,8,10],expected_vers:8,experiment:8,expir:[4,8],expiration_tim:10,expiri:10,expositori:11,extend:[1,10],fail:[0,2,8,11],failur:[0,2,3,4,6,8,11],fallback:8,far:2,fashion:10,fault:[0,2,4,7,8],few:0,field:[0,6],file:[1,3,8],filenam:1,find:[1,8],finish:[0,6,8,10],first:[0,1,6,8],fix:[2,8],flag:[3,11],flaki:4,follow:[0,1,2,6,7,8],foo:6,foobar:6,form:[2,8],format:2,found:1,fqdn:2,framework:[3,6],free:8,frequenc:2,frequent:4,fresh:0,from:[0,3,6,8,10,11],frozen:8,full:[8,11],further:3,futur:[0,8],gang:2,gather:8,gener:1,get:[2,4,8,10,11],get_client:8,get_context:[0,10],get_expired_tim:10,get_worker_except:0,get_worker_group:0,git:3,github:[3,5,9],given:[0,8,10],global:[0,2],global_rank:0,gloo:2,goal:6,gpu:[0,3,10],gracefulli:[0,2,8],grade:4,greater:8,group:[0,2,6,8,10,11],group_nam:6,group_rank:2,guarante:[8,10],handl:[0,1,2,8],handle_existing_rendezv:8,handle_join_last_cal:8,handler:3,happen:[0,8],hard:2,hardwar:4,has:[6,8,10,11],have:[0,1,2,3,6,7,8,10,11],healthi:[0,8],hello_elast:3,help:[3,6,8],helper:8,henc:[0,8,11],here:[1,7,8],high:[0,3,6],highli:[3,8,9],hold:[0,10],holder:0,homogen:[0,2],host:[0,2,7,10],how:[1,3,8,10],howev:[0,6],http:[3,7],identifi:[0,2,6,10],imag:3,immedi:[2,8],implement:[1,2,3,6,8],implementor:0,impli:8,impos:10,includ:[6,8],incom:10,increas:6,increment:8,independ:8,indic:8,info:3,inform:[0,3,5,8],infrastructur:4,ing:8,init:[0,1],init_phas:8,init_process_group:[0,2,11],initi:[0,2,8,11],initialize_metr:1,insid:8,instal:7,instanc:[0,1,2,3,4,6,8,10],instanti:1,instead:[0,3,6,8],instruct:[9,10],integ:8,integr:1,intend:8,intent:8,intention:3,inter:0,interfac:[1,3,6,8],intermedi:8,intern:6,interpret:[0,8,10],interrup:0,interrupt:0,invalid:8,invok:[1,2],is_clos:8,item:2,iter:[2,11],its:[8,10],itself:3,job:[0,1,2,3,4,5,6,7,8,9,10],job_id:[2,7,8],join:[1,2,3,8],join_phas:8,join_rendezv:8,joinabl:[3,8],json:3,just:0,keep:8,keep_al:8,kei:[2,8],kept:3,kill:[2,10],kubernet:[3,4,9],kwarg:8,larg:3,last:8,last_call_timeout:8,late:8,latenc:6,later:8,launch:[0,1,3,4,7,8,11],launcher:3,leaf:6,leaf_modul:6,learn:[1,7],leas:[4,8],least:[3,7,8],leav:[0,2],less:10,let:1,level:[0,3,6],librari:10,like:[3,8],list:[8,10],listen:7,load_checkpoint:[2,11],loader:3,local:[0,2,8,10,11],local_elastic_ag:0,local_rank:[0,2,11],local_world_s:[0,1,2],localelasticag:[0,1,10],localhost:8,localtimercli:10,localtimerserv:10,localworkergroup:2,locat:6,log:[0,6],logic:11,longer:10,look:[3,7,8],lookuperror:8,lose:[8,11],lost:[0,2,11],machin:[0,3],made:2,mai:[0,6,7,8],main:[0,1,2,3,8,10,11],make:[0,2,3,6,8,10,11],manag:[0,2,4,10],manger:8,mani:8,manner:[1,4],manual:[2,8,11],map:[0,2,6],mark:8,master_addr:[2,11],master_port:[2,11],match:8,max:[2,8],max_interv:10,max_nnod:2,max_nod:3,max_restart:[0,1,2],max_siz:[2,7],max_work:8,maximum:8,mean:[8,10],meant:[8,10],measur:6,mechan:8,meet:[3,7],mem_metr:1,member:[0,2,8],membership:[0,2,8],memori:1,messag:10,message_queu:10,method:[0,1,8],metric:4,metric_data:[1,6],metric_group:6,metric_group_nam:6,metric_nam:6,metric_valu:6,metricdata:1,metrichandl:[1,6],metricshandl:1,might:8,millisecond:6,min:[2,8],min_nod:3,min_siz:[2,7],min_work:8,minimum:8,mission:4,mode:[2,8],model:11,modul:[2,6,8],monitor:[0,1,2,8,10],monitor_interv:1,monitorresult:0,more:[0,1,3,5,7,8,10],most:[0,7,8,10,11],mp_queue:10,multi:[0,2,8],multi_contain:3,multipl:[3,8,10],multiprocess:[0,10],must:[0,1,2,3,10,11],mutabl:0,my_app:6,my_method:6,my_metr:6,my_modul:6,mylaunch:1,mymetr:1,mymetrichandl:1,myrdzv:1,myrendezvoushandl:1,name:6,nccl:2,necessari:[0,2,8],necessarili:8,need:[1,2,3,4,8,11],neg:10,ness:2,network:[3,8],never:[2,8],next:[3,8],next_rendezv:[1,8],nnode:[2,3,7],node:[0,1,2,4,7,8],non:[0,8,10],none:[0,6,8,10],noqa:8,normal:8,note:[0,2,8,10],notic:2,notifi:2,now:[3,6,10],nproc_per_nod:[1,2,3,7],nproc_per_process:0,nullmetrichandl:6,nullmetricshandl:6,num:8,num_cuda_devic:3,num_max_work:8,num_min_work:8,num_nod:[2,7],num_nodes_wait:[1,8],num_train:2,num_workers_wait:8,number:[0,2,3,8],nvidia:3,object:[0,3,8,10],observ:[0,8],occupi:3,occur:8,off:0,omp_num_thread:3,onc:[3,8],one:[0,1,3,6,8,10,11],onli:[0,2,3,8,9],oom:3,oper:[1,6,8],opportun:8,optim:3,optimist:0,option:[3,7,8,11],order:1,other:[0,6,8],other_param:[0,10],otherwis:8,our:[2,3,5,7,9,11],ourselv:8,out:[2,3,6],output:[0,1,3,6],overal:8,overload:3,override_timeout:8,overview:6,own:[1,3,8,10],p2p:8,packag:3,page:[3,11],pair:[8,10],parallel:8,param:1,paramet:[0,8],parent:10,pars:11,parse_arg:11,part:8,partial:[0,8],particip:[2,3,8],particular:[0,2,6,8],particularli:10,pass:[0,2,3,6,7,8,10,11],path:[8,11],peer:8,per:[0,2,8,10],perform:[3,8],period:8,persist:8,phase:8,physic:2,pid:[0,10],piggyback:8,pip:7,place:[0,8],placement:0,plane:[0,8],platform:6,pleas:[3,5,8],plugin:4,point:[1,2,3,6,8],pool:4,port:[0,2,8],possibl:8,potenti:[8,10],power:7,pre:3,prefer:[0,9],prefix:8,present:8,previous:8,primit:8,principl:1,print:6,prior:0,problem:8,procedur:1,process:[0,2,3,8,10,11],processgroup:3,prod:6,produc:6,product:[3,4,8],prof:6,profil:6,program:11,progress:[0,2,11],prone:1,propag:8,properli:[0,8],properti:6,protocol:10,provid:[0,1,2,3,4,8,10,11],public_hostnam:7,publish:[6,8],put:0,put_metr:6,python:[0,1,2,6,7,8],pytorch:[0,3,4],quad:0,qualifi:6,queri:8,queue:[0,10],quickli:8,quickstart:4,rais:[0,8],random:8,rang:[2,8,11],rank:[0,1,2,8,11],rather:10,ratio:0,rdzv:[0,2],rdzv_backend:[2,3,7,11],rdzv_endpoint:[2,3,7,11],rdzv_handler:1,rdzv_id:[2,3,7],rdzv_impl:8,rdzv_version:8,reach:[0,8],react:0,read:[0,1],readm:[5,9],reap:10,recent:11,recommend:[0,2,3,8],record:1,recov:0,refer:[5,8,9],region:6,regist:[8,10],register_tim:10,regular:0,relat:0,relationship:6,releas:[8,10],relev:0,remain:8,remot:0,remov:[3,11],render:8,rendev:2,rendezv:[0,2,3,4,6,7,11],rendezvous_barri:8,rendezvousclosedexcept:8,rendezvoushandl:[1,2,8],rendezvousnonretryableerror:8,rendezvoustimeoutexcept:8,renew:8,replac:[2,4],repositori:1,repres:[0,8,10],request:10,request_queu:10,requestqueu:10,requir:[0,3,7],reserv:6,resili:4,resnet18:3,resourc:[5,8],respons:[0,1,6,8,10],rest:3,restart:[0,2,11],result:[0,2],resum:8,ret_val:0,retri:[0,8,10],retriev:1,retryabl:8,role:[0,1,2,8],root:8,run:[0,1,2,4,7,8,9,10],run_id:8,safe:8,same:[0,2,3,6,8,10,11],save_checkpoint:[2,11],scaffold:0,scale:2,scenario:8,schedul:0,scheme:8,scope:10,scope_id:10,script:[0,2,3,4,7,10],second:10,section:[0,1,2,9],see:[3,8,11],self:[0,1,6,10],semant:[2,8],sens:8,sensibl:6,separ:[3,8],serv:1,server:[2,3,7],servic:3,set:[0,3,8,10,11],set_clos:8,set_timeout:8,setup:[1,2,3,8,9],sever:1,share:[1,2,3,4,8],shared_queu:0,shm:3,should:[0,2,3,8,10],should_checkpoint:2,show:[1,3],shutdown:8,side:[8,10],sidecar:[2,3,7,8],signal:8,signatur:0,similar:[2,3,6],simpl:[1,8],simpleelasticag:0,simplest:0,simpli:[2,3],sinc:[3,10],singl:[0,2,3,7,8],sink:6,situat:10,size:[0,2,3,4,8],skeleton:1,small:8,some:[0,2,8,10],someon:8,someth:3,soon:8,sourc:[0,6,8,10],span:3,spawn:[0,10],spec:[0,1,10],specif:[0,8,10],specifi:[0,2,3,8],spot:4,stabl:[2,8],stage:6,standalon:[2,3,7,8],start:[0,1,2,3,4,6,7,8,10],start_method:[0,1,10],start_work:0,state:[0,1,3,8,11],statu:3,stdout:6,stdoutmetrichandl:6,still:8,stop:[0,2,8],storag:1,store:[0,2,8],str:[0,6,8,10],string:[0,6,8],strongli:2,structur:[0,2],stuck:[0,10],style:2,subprocess:[8,10],subset:2,substitut:[3,8],succe:8,succeed:0,success:6,successfulli:[0,6,8],succinctli:6,suffici:8,support:[1,2,4],sure:[2,11],surviv:2,synchron:[1,8],sys:11,system:[1,3],take:[3,7,8,10],taken:4,talk:10,tcp:2,tear:0,technic:8,telemetri:6,template_config:3,temporarili:0,term:8,termin:[0,8,10],test:[2,8],than:[2,3,6,8,10],thei:8,them:[6,8,10],themselv:8,thi:[0,1,2,3,8,10,11],thing:1,this_rank:8,thought:6,thread:0,threw:6,throughout:3,time:[4,6,8,10],timedelta:8,timefram:10,timeout:8,timer:4,timer_cli:10,timer_request:10,timercli:10,timerrequest:10,timerserv:10,timeseri:6,timestamp:6,tini:3,tmp:8,toi:6,toler:[0,2,4,7,8],too:8,toolkit:3,topolog:0,torch:[0,1,2,3,8,10,11],torchelast:[0,1,2,3,6,7,8,9,10,11],torchelastic_etcd_binary_path:8,torchelastic_hom:3,torchelastic_max_restart:2,torchelastic_restart_count:2,torchelatic_hom:3,total:[2,6,8],total_num_epoch:11,track:0,train:[0,1,2,4,7,8],train_loop:8,train_step:2,trainer:[0,2,3,10],trainer_entrypoint_fn:1,trainer_func:10,trainers_per_nod:7,trainsit:8,tranisiton:8,transit:8,trigger:8,trivial:0,try_create_rendezv:8,ttl:8,tune:3,tupl:[1,6,8],two:[1,3,6],type:[0,8,10],typic:[0,2,10],ultim:10,unblock:8,uncaught:0,underli:[0,1],understand:0,unexpect:8,unhandl:0,unhealthi:0,union:2,uniqu:[0,2,6,8,10],unit:[0,2],unknown:0,unless:10,unrecover:0,until:8,updat:0,upon:0,url:[7,8],usag:[0,2,6,8,10],use:[2,3,6,7,8,9],use_env:11,usecas:3,used:[1,2,3,6,7,8,10],useful:[3,8,10],user:[0,2,6,8,11],uses:[2,3,6,8,10],using:[0,1,2,3,6,8,10],usr:8,valid:8,valu:[0,2,6,8],variabl:[2,3,11],variou:9,veri:1,version:[3,8],via:[1,8],video:3,visibl:6,visit:11,w605:8,wai:6,wait:8,wait_for_fin:8,wait_for_p:8,wait_for_rendezvous_to_fre:8,want:6,well:[2,8],were:11,weren:8,what:6,whatev:10,when:[0,2,3,7,8,10,11],where:[2,4,8,10],whether:[0,1,8],which:[0,2,8,10],who:8,window:8,within:[2,8,10],without:8,word:8,work:[0,2,3,8,9,10,11],worker:[0,2,3,8,10,11],worker_group:0,worker_id:10,workergroup:[0,2],workergroupfailureexcept:0,workerspec:[0,1,10],workerst:0,workflow:1,workspac:3,world:[0,2,8],world_siz:[0,2,8,11],worst:11,worth:11,would:[1,3,8],wrap:10,write:[1,6,7,8],yet:0,yml:3,you:[0,1,2,3,6,7,8,9,10,11],your:[1,2,3,6,7,8,9,10,11],your_training_script:[2,7],yourself:3},titles:["Elastic Agent","Customization","Elastic Launch","Examples","TorchElastic","TorchElastic Kubernetes","Metrics","Quickstart","Rendezvous","Cloud Provider Support (Deprecated)","Expiration Timers","Train script"],titleterms:{AWS:9,agent:[0,1],azur:9,build:3,classi:3,client:10,cloud:9,concept:0,contain:3,custom:[1,10],deprec:9,docker:3,document:4,ec2:9,elast:[0,2],etcd:8,exampl:3,except:8,exist:3,expir:10,extend:0,extens:1,handler:[1,6,8],imagenet:3,implement:[0,10],implment:8,kubernet:5,launch:2,launcher:[1,2],method:[6,10],metric:[1,6],multi:3,node:3,obtain:3,prerequisit:3,provid:9,quickstart:7,rendezv:[1,8],repo:3,run:3,sampl:3,script:11,server:[0,8,10],store:1,support:9,timer:10,torchelast:[4,5],train:11,vision:3,write:10}})