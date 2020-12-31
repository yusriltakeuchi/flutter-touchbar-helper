// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

export function activate(context: vscode.ExtensionContext) {
	/// Activate flutter build
	const buildFlutter = vscode.commands.registerCommand('flutter-touchbar-helper.flutterbuild', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', true);
	});

	/// Closing build options
	const closeBuild = vscode.commands.registerCommand('flutter-touchbar-helper.closebuild', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
	});

	/// Closing git
	const closeGit = vscode.commands.registerCommand('flutter-touchbar-helper.closegit', () => {
		vscode.commands.executeCommand('setContext', 'enableGit', false);
	});

	/// Close tools
	const closeTools = vscode.commands.registerCommand('flutter-touchbar-helper.closetools', () => {
		vscode.commands.executeCommand('setContext', 'enableTools', false);
	});

	/// Open tools	
	const openTools = vscode.commands.registerCommand('flutter-touchbar-helper.fluttertools', () => {
		vscode.commands.executeCommand('setContext', 'enableTools', true);
	});
	
	const git = vscode.commands.registerCommand('flutter-touchbar-helper.git', () => {
		vscode.commands.executeCommand('setContext', 'enableGit', true);
	});

	// Git commit 
	const commit = vscode.commands.registerCommand('flutter-touchbar-helper.gitcommit', () => {
		vscode.commands.executeCommand('git.commit');
		vscode.commands.executeCommand('setContext', 'enableGit', false);
	});

	/// Git push
	const push = vscode.commands.registerCommand('flutter-touchbar-helper.gitpush', () => {
		vscode.commands.executeCommand('git.push');
		vscode.commands.executeCommand('setContext', 'enableGit', false);
	});

	/// Activate build single apk
	const buildSingleApk = vscode.commands.registerCommand('flutter-touchbar-helper.build.singleapk', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
		const terminal = vscode.window.createTerminal('Flutter Build APK');
		terminal.show();
		terminal.sendText("flutter clean");
		terminal.sendText("flutter build apk --release");
	});

	/// Activate build single appbundle
	const buildSingleAppbundle = vscode.commands.registerCommand('flutter-touchbar-helper.build.singleappbundle', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
		const terminal = vscode.window.createTerminal('Flutter Build Appbundle');
		terminal.show();
		terminal.sendText("flutter clean");
		terminal.sendText("flutter build appbundle --release");
	});

	/// Activate build split per abi
	const buildSplitABI = vscode.commands.registerCommand('flutter-touchbar-helper.build.splitabi', () => {
		vscode.commands.executeCommand('setContext', 'enableBuild', false);
		const terminal = vscode.window.createTerminal('Flutter Build ABI');
		terminal.show();
		terminal.sendText("flutter clean");
		terminal.sendText("flutter build apk --split-per-abi --release");
	});

	/// Activate flutter clean
	const cleanFlutter = vscode.commands.registerCommand('flutter-touchbar-helper.flutterclean', () => {
		const terminal = vscode.window.createTerminal('Flutter Clean Terminal');
		terminal.show();
		terminal.sendText("flutter clean");
	});	

	/// Activate devtools
	const devtools = vscode.commands.registerCommand('flutter-touchbar-helper.devtools', () => {
		const terminal = vscode.window.createTerminal('Flutter DevTools Terminal');
		terminal.show();
		terminal.sendText("flutter pub global run devtools");

	});	

	context.subscriptions.push(cleanFlutter, buildFlutter, buildSingleApk, buildSingleAppbundle, buildSplitABI, closeBuild, git, closeGit, commit, push, openTools, closeTools, devtools);
}

// this method is called when your extension is deactivated
export function deactivate() {}
