local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local BridgeNet = require(ReplicatedStorage:WaitForChild("BridgeNet"))

BridgeNet.Start({
	[BridgeNet.DefaultSend] = 60,
	[BridgeNet.DefaultReceive] = 60,
})

local Object = BridgeNet.CreateBridge("Test")

local TestRemote = Instance.new("RemoteEvent")
TestRemote.Name = "TestRemote"
TestRemote.Parent = ReplicatedStorage

Object:Connect(function(plr, arg1, arg2)
	print(plr, arg1)
end)

while task.wait() do -- For normal tests, do task.wait
	--[[Object:FireTo(game.Players:GetPlayers()[1], "Received: Fire")
	print(Object:FireAllInRange(Vector3.new(0, 0, 0), 50, "Received: FireAllInRange"))
	Object:FireAll("Received: FireAll")]]

	-- When stress testing, set the task.wait(1) to task.wait().
	for i = 1, 200 do
		Object:FireAll()
	end
	--[[for i = 1, 200 do
		TestRemote:FireAllClients()
	end]]
end
