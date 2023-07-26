function accordion_csv_export(){
var postID = accordionExportVars.postId;
        var url = accordionExportVars.adminUrl;
        var form = jQuery('<form>', {
            'method': 'post',
            'action': url
        });
        jQuery('<input>').attr({
            'type': 'hidden',
            'name': 'action',
            'value': 'export_accordion_csv'
        }).appendTo(form);
        jQuery('<input>').attr({
            'type': 'hidden',
            'name': 'post_id',
            'value': postID
        }).appendTo(form);
        jQuery('<input>').attr({
            'type': 'hidden',
            'name': 'export_accordion_csv_nonce',
            'value': accordionExportVars.exportNonce
        }).appendTo(form);
        form.appendTo('body').submit().remove();
    }