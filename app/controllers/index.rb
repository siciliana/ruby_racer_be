get '/' do
  # Look in app/views/index.erb
  erb :index
end

get '/create_user' do
  erb :create_user
end 


post '/home' do 
  # take login info from post 
  # pull up user object 
  # find or user create 
  erb :home 
end 

 post '/create_user' do
  @current_player1 = Player.create(name: params[:username1])
  @current_player2 = Player.create(name: params[:username2])
  if @current_player1.save && @current_player2.save 
  erb :home 
  end 
end 

