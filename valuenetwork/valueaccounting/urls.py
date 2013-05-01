from django.conf.urls import patterns, url


urlpatterns = patterns("",
    url(r"^start/$", 'valuenetwork.valueaccounting.views.start', name="start"),
    url(r"^projects/$", 'valuenetwork.valueaccounting.views.projects', name="projects"),
    url(r"^resources/$", 'valuenetwork.valueaccounting.views.resource_types', name="resource_types"),
    url(r"^inventory/$", 'valuenetwork.valueaccounting.views.inventory', name="inventory"),
    url(r"^all-contributions/$", 'valuenetwork.valueaccounting.views.all_contributions', name="all_contributions"),
    url(r"^contributions/(?P<project_id>\d+)/$", 'valuenetwork.valueaccounting.views.contributions', name="contributions"),
    url(r"^contributionhistory/(?P<agent_id>\d+)/$", 'valuenetwork.valueaccounting.views.contribution_history', name="contribution_history"),
    url(r"^agent-stats/(?P<agent_id>\d+)/$", 'valuenetwork.valueaccounting.views.agent_stats', name="agent_stats"),
    url(r"^project-wip/(?P<project_id>\d+)/$", 'valuenetwork.valueaccounting.views.project_wip', name="project_wip"),
    url(r"^logtime/$", 'valuenetwork.valueaccounting.views.log_time', name="log_time"),
    url(r"^value/(?P<project_id>\d+)/$", 'valuenetwork.valueaccounting.views.value_equation', name="value_equation"),
    url(r"^xbomfg/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.extended_bill', name="extended_bill"),
    url(r"^edit-xbomfg/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.edit_extended_bill', name="edit_extended_bill"),
    url(r"^network/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.network', name="network"),
    url(r"^project-network/$", 'valuenetwork.valueaccounting.views.project_network', name="project_network"),
    url(r"^timeline/$", 'valuenetwork.valueaccounting.views.timeline', name="timeline"),
    url(r"^jsontimeline/$", 'valuenetwork.valueaccounting.views.json_timeline', name="json_timeline"),
    url(r"^create-processtype-input/(?P<process_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.create_process_type_input', 
        name="create_process_type_input"),
    url(r"^create-processtype-feature/(?P<process_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.create_process_type_feature', 
        name="create_process_type_feature"),
    url(r"^change-feature/(?P<feature_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_feature', 
        name="change_feature"),
    url(r"^delete-feature-confirmation/(?P<feature_id>\d+)/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_feature_confirmation', 
        name="delete_feature_confirmation"),
    url(r"^delete-feature/(?P<feature_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_feature', 
        name="delete_feature"),
    url(r"^create-options-for-feature/(?P<feature_id>\d+)/$", 'valuenetwork.valueaccounting.views.create_options_for_feature', 
        name="create_options_for_feature"),
    url(r"^change-options-for-feature/(?P<feature_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_options_for_feature', 
        name="change_options_for_feature"),
    url(r"^change-processtype-input/(?P<input_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_process_type_input', 
        name="change_process_type_input"),
    url(r"^create-agent-resource-type/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.create_agent_resource_type', 
        name="create_agent_resource_type"),
    url(r"^change-agent-resource-type/(?P<agent_resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_agent_resource_type', 
        name="change_agent_resource_type"),
    url(r"^create-process-type-for-resource-type/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.create_process_type_for_resource_type', 
        name="create_process_type_for_resource_type"),
    url(r"^change-process-type/(?P<process_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_process_type', 
        name="change_process_type"),
    url(r"^change-resource-type/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_resource_type', 
        name="change_resource_type"),
    url(r"^create-resource-type/$", 'valuenetwork.valueaccounting.views.create_resource_type', 
        name="create_resource_type"),
    url(r"^delete-resource-type/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_resource_type', 
        name="delete_resource_type"),
    url(r"^delete-resource-type-confirmation/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_resource_type_confirmation', 
        name="delete_resource_type_confirmation"),
    url(r"^delete-process-type/(?P<process_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_process_type', 
        name="delete_process_type"),
    url(r"^delete-process-type-confirmation/(?P<process_type_id>\d+)/(?P<resource_type_id>\d+)/$", 
        'valuenetwork.valueaccounting.views.delete_process_type_confirmation', 
        name="delete_process_type_confirmation"),
    url(r"^delete-process-input/(?P<process_input_id>\d+)/(?P<resource_type_id>\d+)/$", 
        'valuenetwork.valueaccounting.views.delete_process_input', 
        name="delete_process_input"),
    url(r"^delete-source/(?P<source_id>\d+)/(?P<resource_type_id>\d+)/$", 
        'valuenetwork.valueaccounting.views.delete_source', 
        name="delete_source"),
    url(r"^json-resourcetype-unit/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.json_resource_type_unit', 
        name="json_resource_type_unit"),
    url(r"^json-directional-unit/(?P<resource_type_id>\d+)/(?P<direction>\w+)/$", 'valuenetwork.valueaccounting.views.json_directional_unit', 
        name="json_directional_unit"),
    url(r"^json-resourcetype-defaults/(?P<resource_type_id>\d+)/$", 'valuenetwork.valueaccounting.views.json_resource_type_defaults', 
        name="json_resource_type_defaults"),
    url(r"^create-order/$", 'valuenetwork.valueaccounting.views.create_order', name="create_order"),
    url(r"^order-schedule/(?P<order_id>\d+)/$", 'valuenetwork.valueaccounting.views.order_schedule', name="order_schedule"),
    url(r"^delete-order/(?P<order_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_order', name="delete_order"),
    url(r"^delete-order-confirmation/(?P<order_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_order_confirmation', name="delete_order_confirmation"),
    url(r"^demand/$", 'valuenetwork.valueaccounting.views.demand', name="demand"),
    url(r"^supply/$", 'valuenetwork.valueaccounting.views.supply', name="supply"),
    url(r"^work/$", 'valuenetwork.valueaccounting.views.work', name="work"),
    url(r"^commit-to-task/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.commit_to_task', 
        name="commit_to_task"),
    url(r"^past-work/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.log_past_work', 
        name="log_past_work"),
    url(r"^pastwork-reload/(?P<commitment_id>\d+)/(?P<event_id>\d+)/(?P<was_running>\d+)/(?P<was_retrying>\d+)/$", 'valuenetwork.valueaccounting.views.pastwork_reload', 
        name="pastwork_reload"),
    url(r"^labnotes-reload/(?P<commitment_id>\d+)/(?P<was_running>\d+)/(?P<was_retrying>\d+)/$", 'valuenetwork.valueaccounting.views.labnotes_reload', 
        name="labnotes_reload"),
    url(r"^work-commitment/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.work_commitment', 
        name="work_commitment"),
    url(r"^save-labnotes/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.save_labnotes', 
        name="save_labnotes"),
    url(r"^save-past-work/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.save_past_work', 
        name="save_past_work"),
    url(r"^process/(?P<process_id>\d+)/$", 'valuenetwork.valueaccounting.views.process_details', name="process_details"),
    url(r"^process-done/$", 'valuenetwork.valueaccounting.views.process_done', name="process_done"),
    url(r"^work-done/$", 'valuenetwork.valueaccounting.views.work_done', 
        name="work_done"),
    url(r'^production-event/$', 'valuenetwork.valueaccounting.views.production_event_for_commitment', 
        name="production_event_for_commitment"),
    url(r'^resource-event/(?P<commitment_id>\d+)/$', 'valuenetwork.valueaccounting.views.resource_event_for_commitment', 
        name="resource_event_for_commitment"),
    url(r'^consumption-event/$', 'valuenetwork.valueaccounting.views.consumption_event_for_commitment', 
        name="consumption_event_for_commitment"),
    url(r'^time-use-event/$', 'valuenetwork.valueaccounting.views.time_use_event_for_commitment', 
        name="time_use_event_for_commitment"),
    url(r"^failed-outputs/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.failed_outputs', 
        name="failed_outputs"),
    url(r"^new-process-output/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.new_process_output', 
        name="new_process_output"),
    url(r"^new-process-input/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.new_process_input', 
        name="new_process_input"),
    url(r"^new-process-citation/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.new_process_citation', 
        name="new_process_citation"),
    url(r"^delete-commitment/(?P<commitment_id>\d+)/(?P<labnotes_id>\d+)/$", 'valuenetwork.valueaccounting.views.delete_commitment', 
        name="delete_commitment"),
    url(r"^citation-event-for-commitment/$", 'valuenetwork.valueaccounting.views.citation_event_for_commitment', 
        name="citation_event_for_commitment"),
    url(r"^create-process/$", 'valuenetwork.valueaccounting.views.create_process', 
        name="create_process"),
    url(r"^process-selections/$", 'valuenetwork.valueaccounting.views.process_selections', 
        name="process_selections"),
    url(r"^process-selections/(?P<rand>\d+)/$", 'valuenetwork.valueaccounting.views.process_selections', 
        name="process_selections"),
    url(r"^change-process/(?P<process_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_process', 
        name="change_process"),
    url(r"^copy-process/(?P<process_id>\d+)/$", 'valuenetwork.valueaccounting.views.copy_process', 
        name="copy_process"),
    url(r"^create-rand/$", 'valuenetwork.valueaccounting.views.create_rand', 
        name="create_rand"),
    url(r"^change-rand/(?P<rand_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_rand', 
        name="change_rand"),
    url(r"^copy-rand/(?P<rand_id>\d+)/$", 'valuenetwork.valueaccounting.views.copy_rand', 
        name="copy_rand"),
    url(r"^labnotes/(?P<process_id>\d+)/$", 'valuenetwork.valueaccounting.views.labnotes', 
        name="labnotes"),
    url(r"^labnote/(?P<commitment_id>\d+)/$", 'valuenetwork.valueaccounting.views.labnote', 
        name="labnote"),
    url(r"^resource/(?P<resource_id>\d+)/$", 'valuenetwork.valueaccounting.views.resource', 
        name="resource"),
    url(r"^unscheduled-time/$", 'valuenetwork.valueaccounting.views.unscheduled_time_contributions', 
        name="unscheduled_time"),
    url(r"^log-simple/$", 'valuenetwork.valueaccounting.views.log_simple', 
        name="log_simple"),
    url(r"^change-work-event/(?P<event_id>\d+)/$", 'valuenetwork.valueaccounting.views.change_work_event', 
        name="change_work_event"),
    url(r"^sessions/$", 'valuenetwork.valueaccounting.views.sessions', name="sessions"),
    url(r"^change-event-date/$", 'valuenetwork.valueaccounting.views.change_event_date', name="change_event_date"),
    url(r"^change-event-qty/$", 'valuenetwork.valueaccounting.views.change_event_qty', name="change_event_qty"),
    url(r"^add-todo/$", 'valuenetwork.valueaccounting.views.add_todo', name="add_todo"),
    url(r"^todo-time/$", 'valuenetwork.valueaccounting.views.todo_time', name="todo_time"),
    url(r"^todo-description/$", 'valuenetwork.valueaccounting.views.todo_description', name="todo_description"),
    url(r"^todo-done/(?P<todo_id>\d+)/$", 'valuenetwork.valueaccounting.views.todo_done', name="todo_done"),
    url(r"^todo-decline/(?P<todo_id>\d+)/$", 'valuenetwork.valueaccounting.views.todo_decline', name="todo_decline"),
    url(r"^todo-mine/(?P<todo_id>\d+)/$", 'valuenetwork.valueaccounting.views.todo_mine', name="todo_mine"),
    url(r"^todo-change/(?P<todo_id>\d+)/$", 'valuenetwork.valueaccounting.views.todo_change', name="todo_change"),
    url(r"^todo-delete/(?P<todo_id>\d+)/$", 'valuenetwork.valueaccounting.views.todo_delete', name="todo_delete"),
    url(r"^labnotes-history/$", 'valuenetwork.valueaccounting.views.labnotes_history', name="labnotes_history"),
        
)
