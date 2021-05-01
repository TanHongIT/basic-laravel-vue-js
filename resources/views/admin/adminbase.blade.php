@extends('layouts.components.app')

@section('content')
<div class="wrapper">
    <layout-sidebar-admin></layout-sidebar-admin>
    <div class="main-panel">
        <layout-navbar-admin></layout-navbar-admin>
        <admin-base-component></admin-base-component>
    </div>
</div>
@endsection